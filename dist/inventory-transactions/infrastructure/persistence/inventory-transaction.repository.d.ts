import { DeepPartial } from '../../../utils/types/deep-partial.type';
import { NullableType } from '../../../utils/types/nullable.type';
import { IPaginationOptions } from '../../../utils/types/pagination-options';
import { InventoryTransaction } from '../../domain/inventory-transaction';
export declare abstract class InventoryTransactionRepository {
    abstract create(data: Omit<InventoryTransaction, 'id' | 'createdAt' | 'updatedAt'>): Promise<InventoryTransaction>;
    abstract findAllWithPagination({ paginationOptions, }: {
        paginationOptions: IPaginationOptions;
    }): Promise<InventoryTransaction[]>;
    abstract findById(id: InventoryTransaction['id']): Promise<NullableType<InventoryTransaction>>;
    abstract update(id: InventoryTransaction['id'], payload: DeepPartial<InventoryTransaction>): Promise<InventoryTransaction | null>;
    abstract remove(id: InventoryTransaction['id']): Promise<void>;
}
