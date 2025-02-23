"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PurchaseOrdersService = void 0;
const common_1 = require("@nestjs/common");
const purchase_order_repository_1 = require("./infrastructure/persistence/purchase-order.repository");
let PurchaseOrdersService = class PurchaseOrdersService {
    constructor(purchaseOrderRepository) {
        this.purchaseOrderRepository = purchaseOrderRepository;
    }
    async create(dto) {
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
    findAllWithPagination({ paginationOptions, }) {
        return this.purchaseOrderRepository.findAllWithPagination({
            paginationOptions: {
                page: paginationOptions.page,
                limit: paginationOptions.limit,
            },
        });
    }
    findById(id) {
        return this.purchaseOrderRepository.findById(id);
    }
    findByIds(ids) {
        return this.purchaseOrderRepository.findByIds(ids);
    }
    async update(id, dto) {
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
    remove(id) {
        return this.purchaseOrderRepository.remove(id);
    }
};
exports.PurchaseOrdersService = PurchaseOrdersService;
exports.PurchaseOrdersService = PurchaseOrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [purchase_order_repository_1.PurchaseOrderRepository])
], PurchaseOrdersService);
//# sourceMappingURL=purchase-orders.service.js.map