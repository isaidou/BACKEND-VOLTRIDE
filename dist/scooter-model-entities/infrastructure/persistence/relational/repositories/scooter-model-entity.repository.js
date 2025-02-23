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
exports.ScooterModelEntityRelationalRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const scooter_model_entity_entity_1 = require("../entities/scooter-model-entity.entity");
const scooter_model_entity_mapper_1 = require("../mappers/scooter-model-entity.mapper");
let ScooterModelEntityRelationalRepository = class ScooterModelEntityRelationalRepository {
    constructor(scooterModelEntityRepository) {
        this.scooterModelEntityRepository = scooterModelEntityRepository;
    }
    async create(data) {
        const persistenceModel = scooter_model_entity_mapper_1.ScooterModelEntityMapper.toPersistence(data);
        const newEntity = await this.scooterModelEntityRepository.save(this.scooterModelEntityRepository.create(persistenceModel));
        return scooter_model_entity_mapper_1.ScooterModelEntityMapper.toDomain(newEntity);
    }
    async findAllWithPagination({ paginationOptions, }) {
        const entities = await this.scooterModelEntityRepository.find({
            skip: (paginationOptions.page - 1) * paginationOptions.limit,
            take: paginationOptions.limit,
        });
        return entities.map((entity) => scooter_model_entity_mapper_1.ScooterModelEntityMapper.toDomain(entity));
    }
    async findById(id) {
        const entity = await this.scooterModelEntityRepository.findOne({
            where: { id },
        });
        return entity ? scooter_model_entity_mapper_1.ScooterModelEntityMapper.toDomain(entity) : null;
    }
    async findByIds(ids) {
        const entities = await this.scooterModelEntityRepository.find({
            where: { id: (0, typeorm_2.In)(ids) },
        });
        return entities.map((entity) => scooter_model_entity_mapper_1.ScooterModelEntityMapper.toDomain(entity));
    }
    async update(id, payload) {
        const entity = await this.scooterModelEntityRepository.findOne({
            where: { id },
        });
        if (!entity) {
            throw new Error('Record not found');
        }
        const updatedEntity = await this.scooterModelEntityRepository.save(this.scooterModelEntityRepository.create(scooter_model_entity_mapper_1.ScooterModelEntityMapper.toPersistence({
            ...scooter_model_entity_mapper_1.ScooterModelEntityMapper.toDomain(entity),
            ...payload,
        })));
        return scooter_model_entity_mapper_1.ScooterModelEntityMapper.toDomain(updatedEntity);
    }
    async remove(id) {
        await this.scooterModelEntityRepository.delete(id);
    }
};
exports.ScooterModelEntityRelationalRepository = ScooterModelEntityRelationalRepository;
exports.ScooterModelEntityRelationalRepository = ScooterModelEntityRelationalRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(scooter_model_entity_entity_1.ScooterModelEntityEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ScooterModelEntityRelationalRepository);
//# sourceMappingURL=scooter-model-entity.repository.js.map