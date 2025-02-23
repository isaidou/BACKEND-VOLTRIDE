import { InventoryTransactionsService } from './inventory-transactions.service';
import { CreateInventoryTransactionDto } from './dto/create-inventory-transaction.dto';
import { UpdateInventoryTransactionDto } from './dto/update-inventory-transaction.dto';
import { InfinityPaginationResponseDto } from '../utils/dto/infinity-pagination-response.dto';
import { InventoryTransaction } from './domain/inventory-transaction';
export declare class InventoryTransactionsController {
    private readonly inventoryTransactionsService;
    constructor(inventoryTransactionsService: InventoryTransactionsService);
    create(dto: CreateInventoryTransactionDto): Promise<InventoryTransaction>;
    findAll(page?: number, limit?: number): Promise<InfinityPaginationResponseDto<InventoryTransaction>>;
    findById(id: string): Promise<import("../utils/types/nullable.type").NullableType<InventoryTransaction>>;
    update(id: string, dto: UpdateInventoryTransactionDto): Promise<InventoryTransaction | null>;
    remove(id: string): Promise<void>;
}
