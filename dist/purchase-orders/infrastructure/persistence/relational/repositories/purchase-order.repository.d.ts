import { Repository } from 'typeorm';
import { PurchaseOrderEntity } from '../entities/purchase-order.entity';
import { NullableType } from '../../../../../utils/types/nullable.type';
import { PurchaseOrder } from '../../../../domain/purchase-order';
import { PurchaseOrderRepository } from '../../purchase-order.repository';
import { IPaginationOptions } from '../../../../../utils/types/pagination-options';
export declare class PurchaseOrderRelationalRepository implements PurchaseOrderRepository {
    private readonly purchaseOrderRepository;
    constructor(purchaseOrderRepository: Repository<PurchaseOrderEntity>);
    create(data: PurchaseOrder): Promise<PurchaseOrder>;
    findAllWithPagination({ paginationOptions, }: {
        paginationOptions: IPaginationOptions;
    }): Promise<PurchaseOrder[]>;
    findById(id: string): Promise<NullableType<PurchaseOrder>>;
    findByIds(ids: PurchaseOrder['id'][]): Promise<PurchaseOrder[]>;
    update(id: PurchaseOrder['id'], payload: Partial<PurchaseOrder>): Promise<PurchaseOrder>;
    remove(id: PurchaseOrder['id']): Promise<void>;
}
