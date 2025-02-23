import { ApiProperty } from '@nestjs/swagger';

export class Booking {
  @ApiProperty()
  id: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty({ example: 'uuid-user' })
  userId: string;

  @ApiProperty({ example: 'uuid-scooter' })
  scooterId: string;

  @ApiProperty({ example: '2025-04-01T10:00:00Z' })
  startDatetime: Date;

  @ApiProperty({ example: '2025-04-01T11:00:00Z', required: false })
  endDatetime?: Date;

  @ApiProperty({ example: '123 Main St', required: false })
  location?: string;

  @ApiProperty({ example: 'reserved', description: 'Statut de la réservation' })
  status: string;

  @ApiProperty({ required: false })
  notes?: string;
}
