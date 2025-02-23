import { ApiProperty } from '@nestjs/swagger';

/**
 * Représente le modèle de scooter dans la couche Domain.
 * On y ajoute les champs nécessaires selon le cahier des charges :
 * - name (ex.: "City 45", "Pro 60")
 * - brand (ex.: "VoltRide")
 * - maintenanceIntervalKm (ex.: 50)
 * - maintenanceIntervalMonths (ex.: 6)
 * - description
 */
export class ScooterModelEntity {
  @ApiProperty({ type: String })
  id: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty({ example: 'City 45' })
  name: string;

  @ApiProperty({ example: 'VoltRide', required: false })
  brand?: string;

  @ApiProperty({ example: 50, description: 'Intervalle km avant maintenance' })
  maintenanceIntervalKm?: number;

  @ApiProperty({
    example: 6,
    description: 'Intervalle en mois avant maintenance',
  })
  maintenanceIntervalMonths?: number;

  @ApiProperty({
    example: 'Scooter urbain pour les petits trajets',
    required: false,
  })
  description?: string;
}
