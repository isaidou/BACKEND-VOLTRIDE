import { Injectable } from '@nestjs/common';
import { InventoryTransactionRepository } from './infrastructure/persistence/inventory-transaction.repository';
import { CreateInventoryTransactionDto } from './dto/create-inventory-transaction.dto';
import { UpdateInventoryTransactionDto } from './dto/update-inventory-transaction.dto';
import { InventoryTransaction } from './domain/inventory-transaction';
import { IPaginationOptions } from '../utils/types/pagination-options';

@Injectable()
export class InventoryTransactionsService {
  constructor(
    private readonly inventoryTransactionRepo: InventoryTransactionRepository,
  ) {}

  async create(
    dto: CreateInventoryTransactionDto,
  ): Promise<InventoryTransaction> {
    return this.inventoryTransactionRepo.create({
      partId: dto.partId,
      quantityChange: dto.quantityChange,
      transactionType: dto.transactionType,
      transactionDate: new Date(dto.transactionDate),
      sourceType: dto.sourceType,
      sourceId: dto.sourceId,
    });
  }

  async findAllWithPagination(paginationOptions: IPaginationOptions) {
    return this.inventoryTransactionRepo.findAllWithPagination({
      paginationOptions,
    });
  }

  async findById(id: string) {
    return this.inventoryTransactionRepo.findById(id);
  }

  async update(id: string, dto: UpdateInventoryTransactionDto) {
    return this.inventoryTransactionRepo.update(id, {
      partId: dto.partId,
      quantityChange: dto.quantityChange,
      transactionType: dto.transactionType,
      transactionDate: dto.transactionDate
        ? new Date(dto.transactionDate)
        : undefined,
      sourceType: dto.sourceType,
      sourceId: dto.sourceId,
    });
  }

  async remove(id: string) {
    return this.inventoryTransactionRepo.remove(id);
  }
}
