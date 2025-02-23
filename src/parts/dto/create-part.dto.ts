import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsOptional,
  IsString,
  IsInt,
  IsNumber,
} from 'class-validator';

export class CreatePartDto {
  @ApiProperty({ example: 'Battery' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiPropertyOptional({ example: 'High performance battery' })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional({ example: 100 })
  @IsOptional()
  @IsInt()
  stockQuantity?: number;

  @ApiPropertyOptional({ example: 5 })
  @IsOptional()
  @IsInt()
  minStockThreshold?: number;

  @ApiPropertyOptional({ example: 199.99 })
  @IsOptional()
  @IsNumber()
  price?: number;
}
