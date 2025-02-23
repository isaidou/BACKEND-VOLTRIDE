import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class IncidentDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  id: string;
}
