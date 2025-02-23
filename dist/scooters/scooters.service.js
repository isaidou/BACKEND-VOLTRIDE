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
exports.ScootersService = void 0;
const common_1 = require("@nestjs/common");
const scooter_repository_1 = require("./infrastructure/persistence/scooter.repository");
let ScootersService = class ScootersService {
    constructor(scooterRepo) {
        this.scooterRepo = scooterRepo;
    }
    async create(dto) {
        return this.scooterRepo.create({
            serialNumber: dto.serialNumber,
            status: dto.status ?? 'available',
            totalMileage: dto.totalMileage ?? 0,
            totalChargeCycles: dto.totalChargeCycles ?? 0,
            purchaseDate: dto.purchaseDate ? new Date(dto.purchaseDate) : undefined,
            warrantyEndDate: dto.warrantyEndDate
                ? new Date(dto.warrantyEndDate)
                : undefined,
            scooterModelId: dto.scooterModelId,
        });
    }
    async findAllWithPagination(paginationOptions) {
        return this.scooterRepo.findAllWithPagination({ paginationOptions });
    }
    async findById(id) {
        return this.scooterRepo.findById(id);
    }
    async update(id, dto) {
        return this.scooterRepo.update(id, {
            serialNumber: dto.serialNumber,
            status: dto.status,
            totalMileage: dto.totalMileage,
            totalChargeCycles: dto.totalChargeCycles,
            purchaseDate: dto.purchaseDate ? new Date(dto.purchaseDate) : undefined,
            warrantyEndDate: dto.warrantyEndDate
                ? new Date(dto.warrantyEndDate)
                : undefined,
            scooterModelId: dto.scooterModelId,
        });
    }
    async remove(id) {
        return this.scooterRepo.remove(id);
    }
};
exports.ScootersService = ScootersService;
exports.ScootersService = ScootersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [scooter_repository_1.ScooterRepository])
], ScootersService);
//# sourceMappingURL=scooters.service.js.map