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
exports.ScootersController = void 0;
const common_1 = require("@nestjs/common");
const scooters_service_1 = require("./scooters.service");
const create_scooter_dto_1 = require("./dto/create-scooter.dto");
const update_scooter_dto_1 = require("./dto/update-scooter.dto");
const swagger_1 = require("@nestjs/swagger");
const passport_1 = require("@nestjs/passport");
const infinity_pagination_response_dto_1 = require("../utils/dto/infinity-pagination-response.dto");
const infinity_pagination_1 = require("../utils/infinity-pagination");
const scooter_1 = require("./domain/scooter");
let ScootersController = class ScootersController {
    constructor(scootersService) {
        this.scootersService = scootersService;
    }
    create(createScooterDto) {
        return this.scootersService.create(createScooterDto);
    }
    async findAll(page = 1, limit = 10) {
        if (limit > 50)
            limit = 50;
        const data = await this.scootersService.findAllWithPagination({
            page: +page,
            limit: +limit,
        });
        return (0, infinity_pagination_1.infinityPagination)(data, { page: +page, limit: +limit });
    }
    async findById(id) {
        return this.scootersService.findById(id);
    }
    async update(id, dto) {
        return this.scootersService.update(id, dto);
    }
    async remove(id) {
        return this.scootersService.remove(id);
    }
};
exports.ScootersController = ScootersController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, swagger_1.ApiCreatedResponse)({ type: scooter_1.Scooter }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_scooter_dto_1.CreateScooterDto]),
    __metadata("design:returntype", void 0)
], ScootersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOkResponse)({ type: (0, infinity_pagination_response_dto_1.InfinityPaginationResponse)(scooter_1.Scooter) }),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ScootersController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ScootersController.prototype, "findById", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_scooter_dto_1.UpdateScooterDto]),
    __metadata("design:returntype", Promise)
], ScootersController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ScootersController.prototype, "remove", null);
exports.ScootersController = ScootersController = __decorate([
    (0, swagger_1.ApiTags)('Scooters'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Controller)({ path: 'scooters', version: '1' }),
    __metadata("design:paramtypes", [scooters_service_1.ScootersService])
], ScootersController);
//# sourceMappingURL=scooters.controller.js.map