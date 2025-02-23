import { ApiProperty } from '@nestjs/swagger';

export class Maintenance {
  @ApiProperty()
  id: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty({ example: 'preventive' })
  type: string; // preventive, corrective

  @ApiProperty({
    description: 'Date de la maintenance',
    example: '2025-03-01T10:00:00Z',
  })
  maintenanceDate?: Date;

  @ApiProperty({ example: 100.5 })
  cost: number;

  @ApiProperty({ example: 'Révision semestrielle', required: false })
  notes?: string;

  @ApiProperty({
    example: 'uuid-scooter',
    description: 'ID du scooter concerné',
  })
  scooterId: string;

  @ApiProperty({
    example: 'uuid-user',
    description: 'ID de l’utilisateur (technicien)',
  })
  performedById?: string;

  // Vous pouvez ajouter ici d’autres champs, par exemple pour le kilométrage ou les cycles enregistrés lors de la maintenance
  @ApiProperty({
    example: 12000,
    required: false,
    description: 'Kilométrage au moment de la maintenance',
  })
  currentMileage?: number;

  @ApiProperty({
    example: 50,
    required: false,
    description: 'Nombre de cycles de charge enregistrés',
  })
  currentChargeCycles?: number;
}
