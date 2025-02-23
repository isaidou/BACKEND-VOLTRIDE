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
exports.IncidentsService = void 0;
const common_1 = require("@nestjs/common");
const incident_repository_1 = require("./infrastructure/persistence/incident.repository");
let IncidentsService = class IncidentsService {
    constructor(incidentRepository) {
        this.incidentRepository = incidentRepository;
    }
    async create(dto) {
        return this.incidentRepository.create({
            scooterId: dto.scooterId,
            description: dto.description,
            reportedById: dto.reportedById,
            dateReported: new Date(),
            status: 'open',
            impact_on_operation: true,
        });
    }
    findAllWithPagination({ paginationOptions, }) {
        return this.incidentRepository.findAllWithPagination({
            paginationOptions: {
                page: paginationOptions.page,
                limit: paginationOptions.limit,
            },
        });
    }
    findById(id) {
        return this.incidentRepository.findById(id);
    }
    findByIds(ids) {
        return this.incidentRepository.findByIds(ids);
    }
    async update(id, dto) {
        return this.incidentRepository.update(id, {
            scooterId: dto.scooterId,
            description: dto.description,
            reportedById: dto.reportedById,
            status: dto.status,
            resolutionNotes: dto.resolutionNotes,
        });
    }
    remove(id) {
        return this.incidentRepository.remove(id);
    }
};
exports.IncidentsService = IncidentsService;
exports.IncidentsService = IncidentsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [incident_repository_1.IncidentRepository])
], IncidentsService);
//# sourceMappingURL=incidents.service.js.map