import { InventoryTransactionRepository } from './infrastructure/persistence/inventory-transaction.repository';
import { CreateInventoryTransactionDto } from './dto/create-inventory-transaction.dto';
import { UpdateInventoryTransactionDto } from './dto/update-inventory-transaction.dto';
import { InventoryTransaction } from './domain/inventory-transaction';
import { IPaginationOptions } from '../utils/types/pagination-options';
export declare class InventoryTransactionsService {
    private readonly inventoryTransactionRepo;
    constructor(inventoryTransactionRepo: InventoryTransactionRepository);
    create(dto: CreateInventoryTransactionDto): Promise<InventoryTransaction>;
    findAllWithPagination(paginationOptions: IPaginationOptions): Promise<InventoryTransaction[]>;
    findById(id: string): Promise<import("../utils/types/nullable.type").NullableType<InventoryTransaction>>;
    update(id: string, dto: UpdateInventoryTransactionDto): Promise<InventoryTransaction | null>;
    remove(id: string): Promise<void>;
}
