import { Repository } from 'typeorm';
import { InventoryTransactionRepository } from '../../inventory-transaction.repository';
import { InventoryTransactionEntity } from '../entities/inventory-transaction.entity';
import { InventoryTransaction } from '../../../../domain/inventory-transaction';
import { IPaginationOptions } from '../../../../../utils/types/pagination-options';
import { NullableType } from '../../../../../utils/types/nullable.type';
export declare class InventoryTransactionRelationalRepository implements InventoryTransactionRepository {
    private readonly repo;
    constructor(repo: Repository<InventoryTransactionEntity>);
    create(data: Omit<InventoryTransaction, 'id' | 'createdAt' | 'updatedAt'>): Promise<InventoryTransaction>;
    findAllWithPagination({ paginationOptions, }: {
        paginationOptions: IPaginationOptions;
    }): Promise<InventoryTransaction[]>;
    findById(id: string): Promise<NullableType<InventoryTransaction>>;
    update(id: string, payload: Partial<InventoryTransaction>): Promise<InventoryTransaction | null>;
    remove(id: string): Promise<void>;
}
