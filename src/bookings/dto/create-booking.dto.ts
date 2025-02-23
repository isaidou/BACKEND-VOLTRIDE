import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsUUID, IsDateString, IsOptional, IsString } from 'class-validator';

export class CreateBookingDto {
  @ApiProperty({ example: 'uuid-user' })
  @IsUUID()
  userId: string;

  @ApiProperty({ example: 'uuid-scooter' })
  @IsUUID()
  scooterId: string;

  @ApiProperty({ example: '2025-04-01T10:00:00Z' })
  @IsDateString()
  startDatetime: string;

  @ApiPropertyOptional({ example: '2025-04-01T11:00:00Z' })
  @IsOptional()
  @IsDateString()
  endDatetime?: string;

  @ApiPropertyOptional({ example: '123 Main St' })
  @IsOptional()
  @IsString()
  location?: string;

  @ApiPropertyOptional({ example: 'reserved' })
  @IsOptional()
  @IsString()
  status?: string;

  @ApiPropertyOptional({ example: '' })
  @IsOptional()
  @IsString()
  notes?: string;
}
