import { ApiProperty } from '@nestjs/swagger';

export class PurchaseOrderLine {
  @ApiProperty()
  id?: string;

  @ApiProperty({ example: 'uuid-part' })
  partId: string;

  @ApiProperty({ example: 2 })
  quantity: number;

  @ApiProperty({ example: 50.0 })
  unitPrice: number;

  @ApiProperty()
  createdAt?: Date;

  @ApiProperty()
  updatedAt?: Date;
}
