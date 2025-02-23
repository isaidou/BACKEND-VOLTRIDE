import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsOptional,
  IsString,
  IsInt,
  MaxLength,
} from 'class-validator';

/**
 * DTO pour la création d’un ScooterModelEntity
 */
export class CreateScooterModelEntityDto {
  // Ne pas retirer le commentaire suivant s’il est utilisé par le boilerplate
  // <creating-property />

  @ApiProperty({ example: 'City 45' })
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  name: string;

  @ApiPropertyOptional({ example: 'VoltRide' })
  @IsOptional()
  @IsString()
  @MaxLength(100)
  brand?: string;

  @ApiPropertyOptional({ example: 50, description: 'Entretien tous les X km' })
  @IsOptional()
  @IsInt()
  maintenanceIntervalKm?: number;

  @ApiPropertyOptional({ example: 6, description: 'Entretien tous les X mois' })
  @IsOptional()
  @IsInt()
  maintenanceIntervalMonths?: number;

  @ApiPropertyOptional({ example: 'Scooter urbain pour les petits trajets' })
  @IsOptional()
  @IsString()
  description?: string;
}
