import { PurchaseOrdersService } from './purchase-orders.service';
import { CreatePurchaseOrderDto } from './dto/create-purchase-order.dto';
import { UpdatePurchaseOrderDto } from './dto/update-purchase-order.dto';
import { PurchaseOrder } from './domain/purchase-order';
import { InfinityPaginationResponseDto } from '../utils/dto/infinity-pagination-response.dto';
import { FindAllPurchaseOrdersDto } from './dto/find-all-purchase-orders.dto';
export declare class PurchaseOrdersController {
    private readonly purchaseOrdersService;
    constructor(purchaseOrdersService: PurchaseOrdersService);
    create(createPurchaseOrderDto: CreatePurchaseOrderDto): Promise<PurchaseOrder>;
    findAll(query: FindAllPurchaseOrdersDto): Promise<InfinityPaginationResponseDto<PurchaseOrder>>;
    findById(id: string): Promise<import("../utils/types/nullable.type").NullableType<PurchaseOrder>>;
    update(id: string, updatePurchaseOrderDto: UpdatePurchaseOrderDto): Promise<PurchaseOrder | null>;
    remove(id: string): Promise<void>;
}
