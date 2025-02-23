import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString,
  IsOptional,
  IsDateString,
  IsInt,
  IsUUID,
} from 'class-validator';

export class CreateScooterDto {
  @ApiProperty({ example: 'SN123456' })
  @IsNotEmpty()
  @IsString()
  serialNumber: string;

  @ApiProperty({ example: 'available' })
  @IsString()
  @IsOptional()
  status?: string;

  @ApiProperty({ example: 0 })
  @IsInt()
  @IsOptional()
  totalMileage?: number;

  @ApiProperty({ example: 0 })
  @IsInt()
  @IsOptional()
  totalChargeCycles?: number;

  @ApiProperty({ example: '2025-05-01' })
  @IsDateString()
  @IsOptional()
  purchaseDate?: string;

  @ApiProperty({ example: '2027-05-01' })
  @IsDateString()
  @IsOptional()
  warrantyEndDate?: string;

  @ApiProperty({ example: 'uuid-scooter-model' })
  @IsUUID()
  scooterModelId: string;
}
