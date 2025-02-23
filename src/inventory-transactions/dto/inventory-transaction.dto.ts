import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class InventoryTransactionDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  id: string;
}
