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
exports.ScooterModelEntitiesService = void 0;
const common_1 = require("@nestjs/common");
const scooter_model_entity_repository_1 = require("./infrastructure/persistence/scooter-model-entity.repository");
let ScooterModelEntitiesService = class ScooterModelEntitiesService {
    constructor(scooterModelEntityRepository) {
        this.scooterModelEntityRepository = scooterModelEntityRepository;
    }
    async create(createScooterModelEntityDto) {
        const { name, brand, maintenanceIntervalKm, maintenanceIntervalMonths, description, } = createScooterModelEntityDto;
        return this.scooterModelEntityRepository.create({
            name,
            brand,
            maintenanceIntervalKm,
            maintenanceIntervalMonths,
            description,
        });
    }
    findAllWithPagination({ paginationOptions, }) {
        return this.scooterModelEntityRepository.findAllWithPagination({
            paginationOptions: {
                page: paginationOptions.page,
                limit: paginationOptions.limit,
            },
        });
    }
    findById(id) {
        return this.scooterModelEntityRepository.findById(id);
    }
    findByIds(ids) {
        return this.scooterModelEntityRepository.findByIds(ids);
    }
    async update(id, updateScooterModelEntityDto) {
        const { name, brand, maintenanceIntervalKm, maintenanceIntervalMonths, description, } = updateScooterModelEntityDto;
        return this.scooterModelEntityRepository.update(id, {
            name,
            brand,
            maintenanceIntervalKm,
            maintenanceIntervalMonths,
            description,
        });
    }
    remove(id) {
        return this.scooterModelEntityRepository.remove(id);
    }
};
exports.ScooterModelEntitiesService = ScooterModelEntitiesService;
exports.ScooterModelEntitiesService = ScooterModelEntitiesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [scooter_model_entity_repository_1.ScooterModelEntityRepository])
], ScooterModelEntitiesService);
//# sourceMappingURL=scooter-model-entities.service.js.map