import { ApiProperty } from '@nestjs/swagger';

export class Scooter {
  @ApiProperty()
  id: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty({ example: 'SN123456' })
  serialNumber: string;

  @ApiProperty({ example: 'available', description: 'Statut du scooter' })
  status: string; // available, under_maintenance, etc.

  @ApiProperty({ example: 0 })
  totalMileage: number;

  @ApiProperty({ example: 0 })
  totalChargeCycles: number;

  @ApiProperty({ example: '2025-05-01' })
  purchaseDate?: Date;

  @ApiProperty({ example: '2027-05-01' })
  warrantyEndDate?: Date;

  /**
   * Relation "belongs to" un modèle
   */
  @ApiProperty({ example: 'uuid-scooter-model' })
  scooterModelId: string;
}
