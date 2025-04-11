import { Test, TestingModule } from '@nestjs/testing';
import { ProductsService } from './products.service';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { NotFoundException } from '@nestjs/common';
import { UpdateProductDto } from './dto/update-product.dto';

describe('ProductsService', () => {
  let service: ProductsService;
  let repository: Repository<Product>;

  const mockRepository = {
    create: jest.fn(),
    findAll: jest.fn(),
    findOneBy: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
    save: jest.fn(),
    find: jest.fn(),
    merge: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProductsService,
        {
          provide: getRepositoryToken(Product),
          useValue: mockRepository,
        },
      ],
    }).compile();

    service = module.get<ProductsService>(ProductsService);
    repository = module.get<Repository<Product>>(getRepositoryToken(Product));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('deve criar um novo product', async () => {
      const createProductDto: CreateProductDto = {
        name: 'Produto',
        price: 200,
      };
      const product = { id: 1, name: 'Produto', price: 200 };

      mockRepository.create.mockResolvedValue(createProductDto);
      mockRepository.save.mockResolvedValue(product);

      const result = await service.create(createProductDto);
      expect(result).toEqual(product);
    });
  });

  describe('findAll', () => {
    it('Deve retornar um array de products', async () => {
      const products = [
        { id: 1, name: 'Teste', price: 200 },
        {
          id: 2,
          name: 'teste2',
          price: 120,
        },
      ];

      mockRepository.find.mockResolvedValue(products);
      const result = await service.findAll();
      expect(result).toEqual(products);
    });
  });

  describe('findOne', () => {
    it('deve retornar um product pelo seu ID', async () => {
      const product = { id: 1, name: 'Teste', price: 200 };
      mockRepository.findOneBy.mockResolvedValue(product);

      const result = await service.findOne(1);
      expect(result).toEqual(product);
    });

    it('deve retornar um erro se o product não for encontrado', async () => {
      const productId = -1;
      mockRepository.findOneBy.mockResolvedValue(undefined);

      await expect(service.findOne(productId)).rejects.toThrow(
        NotFoundException,
      );
    });
  });

  describe('update', () => {
    it('deve atualizar um product', async () => {
      const updateProductDto: UpdateProductDto = { name: 'Nome Alterado' };
      const product = { id: 1, name: 'Nome', email: 'email@email.com' };
      const updatedProduct = { ...product, ...updateProductDto };

      mockRepository.findOneBy.mockResolvedValue(product);
      mockRepository.merge.mockResolvedValue(updatedProduct);
      mockRepository.save.mockResolvedValue(updatedProduct);

      const result = await service.update(1, updateProductDto);
      expect(result).toEqual(updatedProduct);
    });
  });

  describe('remove', () => {
    it('deve remover um product', async () => {
      const product = { id: 1, name: 'Teste', email: 'email@email.com' };
      mockRepository.findOneBy.mockResolvedValue(product);
      mockRepository.remove.mockResolvedValue(product);

      const result = await service.remove(1);
      expect(result).toEqual(product);
    });
  });
});
