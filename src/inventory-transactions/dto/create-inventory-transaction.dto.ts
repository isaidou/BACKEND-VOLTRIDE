import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsUUID,
  IsInt,
  IsString,
  IsDateString,
} from 'class-validator';

export class CreateInventoryTransactionDto {
  @ApiProperty({ example: 'uuid-part' })
  @IsUUID()
  partId: string;

  @ApiProperty({ example: 10 })
  @IsInt()
  quantityChange: number;

  @ApiProperty({ example: 'IN', description: 'Type de transaction: IN ou OUT' })
  @IsNotEmpty()
  @IsString()
  transactionType: string;

  @ApiProperty({ example: '2025-06-01T12:00:00Z' })
  @IsDateString()
  transactionDate: string;

  @ApiProperty({
    example: 'purchase_order',
    description: 'Source de la transaction',
  })
  @IsNotEmpty()
  @IsString()
  sourceType: 'purchase_order' | 'maintenance';

  @ApiProperty({ example: 'uuid-of-source' })
  @IsUUID()
  sourceId: string;
}
