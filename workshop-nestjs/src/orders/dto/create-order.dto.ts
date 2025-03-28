import { Type } from 'class-transformer';
import { IsArray, IsNumber, IsPositive, ValidateNested } from 'class-validator';

export class CreateOrderDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateOrderItemDTO)
  products: CreateOrderItemDTO[];

  @IsNumber()
  userId: number;
}

export class CreateOrderItemDTO {
  @IsNumber()
  @IsPositive()
  quantity: number;

  @IsNumber()
  productId: number;
}
