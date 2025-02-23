import { ApiProperty } from '@nestjs/swagger';
import { PurchaseOrderLine } from './purchase-order-line';
export class PurchaseOrder {
  @ApiProperty({
    type: String,
  })
  id: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty({ example: 'uuid-supplier' })
  supplierId: string;

  @ApiProperty({ example: '2025-07-01T10:00:00Z' })
  orderDate: Date;

  @ApiProperty({ example: '2025-07-10T10:00:00Z', required: false })
  expectedDeliveryDate?: Date;

  @ApiProperty({ example: 'open' })
  status: string;

  @ApiProperty({ example: 0 })
  totalCost: number;

  @ApiProperty({ type: [PurchaseOrderLine] })
  orderLines: PurchaseOrderLine[];
}
