// create-purchase-order-line.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsUUID, IsInt, IsNumber } from 'class-validator';

export class CreatePurchaseOrderLineDto {
  @ApiProperty({ example: 'uuid-part' })
  @IsUUID()
  partId: string;

  @ApiProperty({ example: 2 })
  @IsInt()
  quantity: number;

  @ApiProperty({ example: 50.0 })
  @IsNumber()
  unitPrice: number;
}
