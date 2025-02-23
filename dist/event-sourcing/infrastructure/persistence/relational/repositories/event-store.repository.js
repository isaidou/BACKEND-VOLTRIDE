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
exports.EventStoreRelationalRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const event_entity_1 = require("../entities/event.entity");
const event_store_mapper_1 = require("../mappers/event-store.mapper");
let EventStoreRelationalRepository = class EventStoreRelationalRepository {
    constructor(eventStoreRepository) {
        this.eventStoreRepository = eventStoreRepository;
    }
    async create(data) {
        const persistenceModel = event_store_mapper_1.EventStoreMapper.toPersistence(data);
        const newEntity = await this.eventStoreRepository.save(this.eventStoreRepository.create(persistenceModel));
        return event_store_mapper_1.EventStoreMapper.toDomain(newEntity);
    }
    async findAllWithPagination({ paginationOptions, }) {
        const entities = await this.eventStoreRepository.find({
            skip: (paginationOptions.page - 1) * paginationOptions.limit,
            take: paginationOptions.limit,
        });
        return entities.map((entity) => event_store_mapper_1.EventStoreMapper.toDomain(entity));
    }
    async findById(id) {
        const entity = await this.eventStoreRepository.findOne({
            where: { id },
        });
        return entity ? event_store_mapper_1.EventStoreMapper.toDomain(entity) : null;
    }
    async findByIds(ids) {
        const entities = await this.eventStoreRepository.find({
            where: { id: (0, typeorm_2.In)(ids) },
        });
        return entities.map((entity) => event_store_mapper_1.EventStoreMapper.toDomain(entity));
    }
    async update(id, payload) {
        const entity = await this.eventStoreRepository.findOne({
            where: { id },
        });
        if (!entity) {
            throw new Error('Record not found');
        }
        const updatedEntity = await this.eventStoreRepository.save(this.eventStoreRepository.create(event_store_mapper_1.EventStoreMapper.toPersistence({
            ...event_store_mapper_1.EventStoreMapper.toDomain(entity),
            ...payload,
        })));
        return event_store_mapper_1.EventStoreMapper.toDomain(updatedEntity);
    }
    async remove(id) {
        await this.eventStoreRepository.delete(id);
    }
};
exports.EventStoreRelationalRepository = EventStoreRelationalRepository;
exports.EventStoreRelationalRepository = EventStoreRelationalRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(event_entity_1.EventStoreEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], EventStoreRelationalRepository);
//# sourceMappingURL=event-store.repository.js.map