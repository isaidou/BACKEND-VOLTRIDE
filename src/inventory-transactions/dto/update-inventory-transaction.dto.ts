// Don't forget to use the class-validator decorators in the DTO properties.
// import { Allow } from 'class-validator';

import { PartialType } from '@nestjs/swagger';
import { CreateInventoryTransactionDto } from './create-inventory-transaction.dto';

export class UpdateInventoryTransactionDto extends PartialType(
  CreateInventoryTransactionDto,
) {}
