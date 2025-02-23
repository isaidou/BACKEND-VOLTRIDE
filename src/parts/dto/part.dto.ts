import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class PartDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  id: string;
}
