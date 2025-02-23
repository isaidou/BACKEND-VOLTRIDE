import { CreatePurchaseOrderDto } from './dto/create-purchase-order.dto';
import { UpdatePurchaseOrderDto } from './dto/update-purchase-order.dto';
import { PurchaseOrderRepository } from './infrastructure/persistence/purchase-order.repository';
import { IPaginationOptions } from '../utils/types/pagination-options';
import { PurchaseOrder } from './domain/purchase-order';
export declare class PurchaseOrdersService {
    private readonly purchaseOrderRepository;
    constructor(purchaseOrderRepository: PurchaseOrderRepository);
    create(dto: CreatePurchaseOrderDto): Promise<PurchaseOrder>;
    findAllWithPagination({ paginationOptions, }: {
        paginationOptions: IPaginationOptions;
    }): Promise<PurchaseOrder[]>;
    findById(id: PurchaseOrder['id']): Promise<import("../utils/types/nullable.type").NullableType<PurchaseOrder>>;
    findByIds(ids: PurchaseOrder['id'][]): Promise<PurchaseOrder[]>;
    update(id: string, dto: UpdatePurchaseOrderDto): Promise<PurchaseOrder | null>;
    remove(id: PurchaseOrder['id']): Promise<void>;
}
