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
exports.PartRelationalRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const part_mapper_1 = require("../mappers/part.mapper");
const part_entity_1 = require("../entities/part.entity");
let PartRelationalRepository = class PartRelationalRepository {
    constructor(repo) {
        this.repo = repo;
    }
    async create(data) {
        const entity = part_mapper_1.PartMapper.toPersistence(data);
        const newEntity = await this.repo.save(this.repo.create(entity));
        return part_mapper_1.PartMapper.toDomain(newEntity);
    }
    async findAllWithPagination({ paginationOptions, }) {
        const { page, limit } = paginationOptions;
        const entities = await this.repo.find({
            skip: (page - 1) * limit,
            take: limit,
            order: { lastEventTimestamp: 'DESC' },
        });
        return entities.map(part_mapper_1.PartMapper.toDomain);
    }
    async findById(id) {
        const entity = await this.repo.findOne({ where: { id } });
        return entity ? part_mapper_1.PartMapper.toDomain(entity) : null;
    }
    async update(id, payload) {
        const existing = await this.repo.findOne({ where: { id } });
        if (!existing)
            return null;
        const merged = this.repo.merge(existing, part_mapper_1.PartMapper.toPersistence({
            ...part_mapper_1.PartMapper.toDomain(existing),
            ...payload,
        }));
        const updated = await this.repo.save(merged);
        return part_mapper_1.PartMapper.toDomain(updated);
    }
    async remove(id) {
        await this.repo.delete(id);
    }
};
exports.PartRelationalRepository = PartRelationalRepository;
exports.PartRelationalRepository = PartRelationalRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(part_entity_1.PartEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PartRelationalRepository);
//# sourceMappingURL=part.repository.js.map