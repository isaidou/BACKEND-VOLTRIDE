import { Module } from '@nestjs/common';
import { InventoryTransactionsService } from './inventory-transactions.service';
import { InventoryTransactionsController } from './inventory-transactions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InventoryTransactionEntity } from './infrastructure/persistence/relational/entities/inventory-transaction.entity';
import { InventoryTransactionRepository } from './infrastructure/persistence/inventory-transaction.repository';
import { InventoryTransactionRelationalRepository } from './infrastructure/persistence/relational/repositories/inventory-transaction.repository';

@Module({
  imports: [TypeOrmModule.forFeature([InventoryTransactionEntity])],
  controllers: [InventoryTransactionsController],
  providers: [
    InventoryTransactionsService,
    {
      provide: InventoryTransactionRepository,
      useClass: InventoryTransactionRelationalRepository,
    },
  ],
  exports: [InventoryTransactionsService],
})
export class InventoryTransactionsModule {}
