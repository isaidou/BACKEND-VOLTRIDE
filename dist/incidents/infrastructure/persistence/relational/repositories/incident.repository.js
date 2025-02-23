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
exports.IncidentRelationalRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const incident_entity_1 = require("../entities/incident.entity");
const incident_mapper_1 = require("../mappers/incident.mapper");
let IncidentRelationalRepository = class IncidentRelationalRepository {
    constructor(incidentRepository) {
        this.incidentRepository = incidentRepository;
    }
    async create(data) {
        const persistenceModel = incident_mapper_1.IncidentMapper.toPersistence(data);
        const newEntity = await this.incidentRepository.save(this.incidentRepository.create(persistenceModel));
        return incident_mapper_1.IncidentMapper.toDomain(newEntity);
    }
    async findAllWithPagination({ paginationOptions, }) {
        const entities = await this.incidentRepository.find({
            skip: (paginationOptions.page - 1) * paginationOptions.limit,
            take: paginationOptions.limit,
        });
        return entities.map((entity) => incident_mapper_1.IncidentMapper.toDomain(entity));
    }
    async findById(id) {
        const entity = await this.incidentRepository.findOne({
            where: { id },
        });
        return entity ? incident_mapper_1.IncidentMapper.toDomain(entity) : null;
    }
    async findByIds(ids) {
        const entities = await this.incidentRepository.find({
            where: { id: (0, typeorm_2.In)(ids) },
        });
        return entities.map((entity) => incident_mapper_1.IncidentMapper.toDomain(entity));
    }
    async update(id, payload) {
        const entity = await this.incidentRepository.findOne({
            where: { id },
        });
        if (!entity) {
            throw new Error('Record not found');
        }
        const updatedEntity = await this.incidentRepository.save(this.incidentRepository.create(incident_mapper_1.IncidentMapper.toPersistence({
            ...incident_mapper_1.IncidentMapper.toDomain(entity),
            ...payload,
        })));
        return incident_mapper_1.IncidentMapper.toDomain(updatedEntity);
    }
    async remove(id) {
        await this.incidentRepository.delete(id);
    }
};
exports.IncidentRelationalRepository = IncidentRelationalRepository;
exports.IncidentRelationalRepository = IncidentRelationalRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(incident_entity_1.IncidentEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], IncidentRelationalRepository);
//# sourceMappingURL=incident.repository.js.map