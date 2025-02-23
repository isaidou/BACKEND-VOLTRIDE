import { Module } from '@nestjs/common';
import { InventoryTransactionRepository } from '../inventory-transaction.repository';
import { InventoryTransactionRelationalRepository } from './repositories/inventory-transaction.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InventoryTransactionEntity } from './entities/inventory-transaction.entity';

@Module({
  imports: [TypeOrmModule.forFeature([InventoryTransactionEntity])],
  providers: [
    {
      provide: InventoryTransactionRepository,
      useClass: InventoryTransactionRelationalRepository,
    },
  ],
  exports: [InventoryTransactionRepository],
})
export class RelationalInventoryTransactionPersistenceModule {}
