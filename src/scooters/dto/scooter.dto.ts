import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class ScooterDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  id: string;
}
