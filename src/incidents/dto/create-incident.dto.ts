import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsObject,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';

export class CreateIncidentDto {
  @ApiProperty({ example: 'uuid-scooter' })
  @IsUUID()
  scooterId: string;

  @ApiProperty({ example: "Description de l'incident" })
  @IsNotEmpty()
  @IsString()
  description: string;

  @ApiProperty({ example: 'uuid-user', required: false })
  @IsUUID()
  reportedById?: string;

  @ApiProperty({ example: 'open' })
  @IsNotEmpty()
  @IsString()
  @IsOptional()
  status?: string;

  @ApiProperty({
    example: true,
    description: "Impact sur l'opération (true = critique)",
  })
  @IsNotEmpty()
  @IsObject()
  @IsOptional()
  impact_on_operation?: boolean;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  resolutionNotes?: string;
}
