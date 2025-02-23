import { ApiProperty } from '@nestjs/swagger';

export class Part {
  @ApiProperty()
  id: string;

  @ApiProperty({ example: 'Battery' })
  name: string;

  @ApiProperty({ example: 'High performance battery', required: false })
  description?: string;

  @ApiProperty({ example: 100 })
  stockQuantity: number;

  @ApiProperty({
    example: 5,
    description: 'Seuil minimal pour déclencher une alerte',
  })
  minStockThreshold: number;

  @ApiProperty({ example: 199.99 })
  price: number;

  @ApiProperty({ required: false })
  lastEventTimestamp?: Date;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
