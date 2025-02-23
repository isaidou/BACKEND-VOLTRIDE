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
exports.SupplierRelationalRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const supplier_entity_1 = require("../entities/supplier.entity");
const supplier_mapper_1 = require("../mappers/supplier.mapper");
let SupplierRelationalRepository = class SupplierRelationalRepository {
    constructor(supplierRepository) {
        this.supplierRepository = supplierRepository;
    }
    async create(data) {
        const persistenceModel = supplier_mapper_1.SupplierMapper.toPersistence(data);
        const newEntity = await this.supplierRepository.save(this.supplierRepository.create(persistenceModel));
        return supplier_mapper_1.SupplierMapper.toDomain(newEntity);
    }
    async findAllWithPagination({ paginationOptions, }) {
        const entities = await this.supplierRepository.find({
            skip: (paginationOptions.page - 1) * paginationOptions.limit,
            take: paginationOptions.limit,
        });
        return entities.map((entity) => supplier_mapper_1.SupplierMapper.toDomain(entity));
    }
    async findById(id) {
        const entity = await this.supplierRepository.findOne({
            where: { id },
        });
        return entity ? supplier_mapper_1.SupplierMapper.toDomain(entity) : null;
    }
    async findByIds(ids) {
        const entities = await this.supplierRepository.find({
            where: { id: (0, typeorm_2.In)(ids) },
        });
        return entities.map((entity) => supplier_mapper_1.SupplierMapper.toDomain(entity));
    }
    async update(id, payload) {
        const entity = await this.supplierRepository.findOne({
            where: { id },
        });
        if (!entity) {
            throw new Error('Record not found');
        }
        const updatedEntity = await this.supplierRepository.save(this.supplierRepository.create(supplier_mapper_1.SupplierMapper.toPersistence({
            ...supplier_mapper_1.SupplierMapper.toDomain(entity),
            ...payload,
        })));
        return supplier_mapper_1.SupplierMapper.toDomain(updatedEntity);
    }
    async remove(id) {
        await this.supplierRepository.delete(id);
    }
};
exports.SupplierRelationalRepository = SupplierRelationalRepository;
exports.SupplierRelationalRepository = SupplierRelationalRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(supplier_entity_1.SupplierEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], SupplierRelationalRepository);
//# sourceMappingURL=supplier.repository.js.map