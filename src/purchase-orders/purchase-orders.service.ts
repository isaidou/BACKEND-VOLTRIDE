import { Injectable } from '@nestjs/common';
import { CreatePurchaseOrderDto } from './dto/create-purchase-order.dto';
import { UpdatePurchaseOrderDto } from './dto/update-purchase-order.dto';
import { PurchaseOrderRepository } from './infrastructure/persistence/purchase-order.repository';
import { IPaginationOptions } from '../utils/types/pagination-options';
import { PurchaseOrder } from './domain/purchase-order';

@Injectable()
export class PurchaseOrdersService {
  constructor(
    // Dependencies here
    private readonly purchaseOrderRepository: PurchaseOrderRepository,
  ) {}

  async create(dto: CreatePurchaseOrderDto): Promise<PurchaseOrder> {
    return this.purchaseOrderRepository.create({
      supplierId: dto.supplierId,
      orderDate: new Date(),
      expectedDeliveryDate: dto.expectedDeliveryDate
        ? new Date(dto.expectedDeliveryDate)
        : undefined,
      status: dto.status ?? 'open',
      totalCost: dto.totalCost ?? 0,
      orderLines: dto.orderLines,
    });
  }

  findAllWithPagination({
    paginationOptions,
  }: {
    paginationOptions: IPaginationOptions;
  }) {
    return this.purchaseOrderRepository.findAllWithPagination({
      paginationOptions: {
        page: paginationOptions.page,
        limit: paginationOptions.limit,
      },
    });
  }

  findById(id: PurchaseOrder['id']) {
    return this.purchaseOrderRepository.findById(id);
  }

  findByIds(ids: PurchaseOrder['id'][]) {
    return this.purchaseOrderRepository.findByIds(ids);
  }

  async update(id: string, dto: UpdatePurchaseOrderDto) {
    return this.purchaseOrderRepository.update(id, {
      supplierId: dto.supplierId,
      expectedDeliveryDate: dto.expectedDeliveryDate
        ? new Date(dto.expectedDeliveryDate)
        : undefined,
      status: dto.status,
      totalCost: dto.totalCost,
      orderLines: dto.orderLines,
    });
  }

  remove(id: PurchaseOrder['id']) {
    return this.purchaseOrderRepository.remove(id);
  }
}
