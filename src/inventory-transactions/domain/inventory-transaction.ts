import { ApiProperty } from '@nestjs/swagger';

export class InventoryTransaction {
  @ApiProperty()
  id: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty({
    example: 'uuid-part',
    description: 'ID de la pièce concernée',
  })
  partId: string;

  @ApiProperty({
    example: 10,
    description: 'Variation de stock (positive pour IN, négative pour OUT)',
  })
  quantityChange: number;

  @ApiProperty({
    example: 'IN',
    description: 'Type de transaction (IN ou OUT)',
  })
  transactionType: string;

  @ApiProperty({
    example: '2025-06-01T12:00:00Z',
    description: 'Date de la transaction',
  })
  transactionDate: Date;

  @ApiProperty({
    example: 'purchase_order',
    description: 'Origine de la transaction (purchase_order ou maintenance)',
  })
  sourceType: 'purchase_order' | 'maintenance';

  @ApiProperty({
    example: 'uuid-of-source',
    description: 'ID de la source (commande ou maintenance)',
  })
  sourceId: string;
}
