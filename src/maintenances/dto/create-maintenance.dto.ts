import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString,
  IsOptional,
  IsNumber,
  IsUUID,
  IsDateString,
} from 'class-validator';

export class CreateMaintenanceDto {
  @ApiProperty({ example: 'preventive' })
  @IsNotEmpty()
  @IsString()
  type: string;

  @ApiPropertyOptional({ example: '2025-03-01T10:00:00Z' })
  @IsOptional()
  @IsDateString()
  maintenanceDate?: string;

  @ApiProperty({ example: 100.5 })
  @IsNotEmpty()
  @IsNumber()
  cost: number;

  @ApiPropertyOptional({ example: 'Révision semestrielle' })
  @IsOptional()
  @IsString()
  notes?: string;

  @ApiProperty({ example: 'uuid-scooter' })
  @IsUUID()
  scooterId: string;

  @ApiPropertyOptional({ example: 'uuid-user' })
  @IsOptional()
  @IsUUID()
  performedById?: string;

  @ApiPropertyOptional({
    example: 12000,
    description: 'Kilométrage au moment de la maintenance',
  })
  @IsOptional()
  @IsNumber()
  currentMileage?: number;

  @ApiPropertyOptional({
    example: 50,
    description: 'Nombre de cycles de charge',
  })
  @IsOptional()
  @IsNumber()
  currentChargeCycles?: number;
}
