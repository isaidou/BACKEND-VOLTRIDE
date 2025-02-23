import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class ScooterModelEntityDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  id: string;
}
