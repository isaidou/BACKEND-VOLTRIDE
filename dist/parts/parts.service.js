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
exports.PartsService = void 0;
const common_1 = require("@nestjs/common");
const part_repository_1 = require("./infrastructure/persistence/part.repository");
let PartsService = class PartsService {
    constructor(partRepo) {
        this.partRepo = partRepo;
    }
    async create(dto) {
        return this.partRepo.create({
            name: dto.name,
            description: dto.description,
            stockQuantity: dto.stockQuantity ?? 0,
            minStockThreshold: dto.minStockThreshold ?? 0,
            price: dto.price ?? 0,
        });
    }
    async findAllWithPagination(paginationOptions) {
        return this.partRepo.findAllWithPagination({ paginationOptions });
    }
    async findById(id) {
        return this.partRepo.findById(id);
    }
    async update(id, dto) {
        return this.partRepo.update(id, {
            name: dto.name,
            description: dto.description,
            stockQuantity: dto.stockQuantity,
            minStockThreshold: dto.minStockThreshold,
            price: dto.price,
        });
    }
    async remove(id) {
        return this.partRepo.remove(id);
    }
};
exports.PartsService = PartsService;
exports.PartsService = PartsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [part_repository_1.PartRepository])
], PartsService);
//# sourceMappingURL=parts.service.js.map