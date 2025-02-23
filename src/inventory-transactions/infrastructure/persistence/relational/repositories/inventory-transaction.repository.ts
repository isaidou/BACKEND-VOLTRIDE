import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { InventoryTransactionRepository } from '../../inventory-transaction.repository';
import { InventoryTransactionMapper } from '../mappers/inventory-transaction.mapper';
import { InventoryTransactionEntity } from '../entities/inventory-transaction.entity';
import { InventoryTransaction } from '../../../../domain/inventory-transaction';
import { IPaginationOptions } from '../../../../../utils/types/pagination-options';
import { NullableType } from '../../../../../utils/types/nullable.type';

@Injectable()
export class InventoryTransactionRelationalRepository
  implements InventoryTransactionRepository
{
  constructor(
    @InjectRepository(InventoryTransactionEntity)
    private readonly repo: Repository<InventoryTransactionEntity>,
  ) {}

  async create(
    data: Omit<InventoryTransaction, 'id' | 'createdAt' | 'updatedAt'>,
  ): Promise<InventoryTransaction> {
    const entity = InventoryTransactionMapper.toPersistence(
      data as InventoryTransaction,
    );
    const newEntity = await this.repo.save(this.repo.create(entity));
    return InventoryTransactionMapper.toDomain(newEntity);
  }

  async findAllWithPagination({
    paginationOptions,
  }: {
    paginationOptions: IPaginationOptions;
  }): Promise<InventoryTransaction[]> {
    const { page, limit } = paginationOptions;
    const entities = await this.repo.find({
      skip: (page - 1) * limit,
      take: limit,
      order: { createdAt: 'DESC' },
    });
    return entities.map(InventoryTransactionMapper.toDomain);
  }

  async findById(id: string): Promise<NullableType<InventoryTransaction>> {
    const entity = await this.repo.findOne({ where: { id } });
    return entity ? InventoryTransactionMapper.toDomain(entity) : null;
  }

  async update(
    id: string,
    payload: Partial<InventoryTransaction>,
  ): Promise<InventoryTransaction | null> {
    const existing = await this.repo.findOne({ where: { id } });
    if (!existing) return null;
    const merged = this.repo.merge(
      existing,
      InventoryTransactionMapper.toPersistence({
        ...InventoryTransactionMapper.toDomain(existing),
        ...payload,
      }),
    );
    const updated = await this.repo.save(merged);
    return InventoryTransactionMapper.toDomain(updated);
  }

  async remove(id: string): Promise<void> {
    await this.repo.delete(id);
  }
}
