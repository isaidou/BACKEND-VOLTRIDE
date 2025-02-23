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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PurchaseOrderRelationalRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const purchase_order_entity_1 = require("../entities/purchase-order.entity");
const purchase_order_mapper_1 = require("../mappers/purchase-order.mapper");
let PurchaseOrderRelationalRepository = class PurchaseOrderRelationalRepository {
    constructor(purchaseOrderRepository) {
        this.purchaseOrderRepository = purchaseOrderRepository;
    }
    async create(data) {
        const persistenceModel = purchase_order_mapper_1.PurchaseOrderMapper.toPersistence(data);
        const newEntity = await this.purchaseOrderRepository.save(this.purchaseOrderRepository.create(persistenceModel));
        return purchase_order_mapper_1.PurchaseOrderMapper.toDomain(newEntity);
    }
    async findAllWithPagination({ paginationOptions, }) {
        const entities = await this.purchaseOrderRepository.find({
            skip: (paginationOptions.page - 1) * paginationOptions.limit,
            take: paginationOptions.limit,
            relations: ['orderLines'],
        });
        return entities.map((entity) => purchase_order_mapper_1.PurchaseOrderMapper.toDomain(entity));
    }
    async findById(id) {
        const entity = await this.purchaseOrderRepository.findOne({
            where: { id },
            relations: ['orderLines'],
        });
        return entity ? purchase_order_mapper_1.PurchaseOrderMapper.toDomain(entity) : null;
    }
    async findByIds(ids) {
        const entities = await this.purchaseOrderRepository.find({
            where: { id: (0, typeorm_2.In)(ids) },
            relations: ['orderLines'],
        });
        return entities.map((entity) => purchase_order_mapper_1.PurchaseOrderMapper.toDomain(entity));
    }
    async update(id, payload) {
        const entity = await this.purchaseOrderRepository.findOne({
            where: { id },
        });
        if (!entity) {
            throw new Error('Record not found');
        }
        const merged = this.purchaseOrderRepository.merge(entity, purchase_order_mapper_1.PurchaseOrderMapper.toPersistence({
            ...purchase_order_mapper_1.PurchaseOrderMapper.toDomain(entity),
            ...payload,
        }));
        const updated = await this.purchaseOrderRepository.save(merged);
        return purchase_order_mapper_1.PurchaseOrderMapper.toDomain(updated);
    }
    async remove(id) {
        await this.purchaseOrderRepository.delete(id);
    }
};
exports.PurchaseOrderRelationalRepository = PurchaseOrderRelationalRepository;
exports.PurchaseOrderRelationalRepository = PurchaseOrderRelationalRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(purchase_order_entity_1.PurchaseOrderEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PurchaseOrderRelationalRepository);
//# sourceMappingURL=purchase-order.repository.js.map