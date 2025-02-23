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
exports.InventoryTransactionRelationalRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const inventory_transaction_mapper_1 = require("../mappers/inventory-transaction.mapper");
const inventory_transaction_entity_1 = require("../entities/inventory-transaction.entity");
let InventoryTransactionRelationalRepository = class InventoryTransactionRelationalRepository {
    constructor(repo) {
        this.repo = repo;
    }
    async create(data) {
        const entity = inventory_transaction_mapper_1.InventoryTransactionMapper.toPersistence(data);
        const newEntity = await this.repo.save(this.repo.create(entity));
        return inventory_transaction_mapper_1.InventoryTransactionMapper.toDomain(newEntity);
    }
    async findAllWithPagination({ paginationOptions, }) {
        const { page, limit } = paginationOptions;
        const entities = await this.repo.find({
            skip: (page - 1) * limit,
            take: limit,
            order: { createdAt: 'DESC' },
        });
        return entities.map(inventory_transaction_mapper_1.InventoryTransactionMapper.toDomain);
    }
    async findById(id) {
        const entity = await this.repo.findOne({ where: { id } });
        return entity ? inventory_transaction_mapper_1.InventoryTransactionMapper.toDomain(entity) : null;
    }
    async update(id, payload) {
        const existing = await this.repo.findOne({ where: { id } });
        if (!existing)
            return null;
        const merged = this.repo.merge(existing, inventory_transaction_mapper_1.InventoryTransactionMapper.toPersistence({
            ...inventory_transaction_mapper_1.InventoryTransactionMapper.toDomain(existing),
            ...payload,
        }));
        const updated = await this.repo.save(merged);
        return inventory_transaction_mapper_1.InventoryTransactionMapper.toDomain(updated);
    }
    async remove(id) {
        await this.repo.delete(id);
    }
};
exports.InventoryTransactionRelationalRepository = InventoryTransactionRelationalRepository;
exports.InventoryTransactionRelationalRepository = InventoryTransactionRelationalRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(inventory_transaction_entity_1.InventoryTransactionEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], InventoryTransactionRelationalRepository);
//# sourceMappingURL=inventory-transaction.repository.js.map