import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { In, Repository } from 'typeorm';
import { OrderItem } from './entities/orderitem.entity';
import { Product } from 'src/products/entities/product.entity';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private orderRepository: Repository<Order>,
    @InjectRepository(OrderItem)
    private orderItemRepository: Repository<OrderItem>,
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) { }

  async create(createOrderDto: CreateOrderDto) {
    const produtos = await this.productRepository.find({
      where: {
        id: In(createOrderDto.products.map((item) => item.productId)),
      },
    });

    const total = produtos.reduce((acc, product) => {
      const item = createOrderDto.products.find(
        (item) => (item.productId = product.id),
      );

      if (!item) return acc;

      return acc + product.price * item.quantity;
    }, 0);

    const order = this.orderRepository.create({
      total,
      userId: createOrderDto.userId,
    });

    await this.orderRepository.save(order);

    const items = produtos.map((product) => {
      const item = createOrderDto.products.find(
        (item) => item.productId === product.id,
      );

      const qtd = item ? item.quantity : 0;

      return this.orderItemRepository.create({
        quantity: item?.quantity,
        price: product.price,
        total: product.price * qtd,
        orderId: order.id,
        productId: product.id,
      });
    });

    await this.orderItemRepository.save(items);

    return order;
  }

  findAll() {
    return this.orderRepository.find({
      relations: ['items', 'items.product', 'user']
    })
  }

  findOne(id: number) {
    return this.orderRepository.find({
      where: { id },
      relations: ['items', 'items.product', 'user']
    })
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}
