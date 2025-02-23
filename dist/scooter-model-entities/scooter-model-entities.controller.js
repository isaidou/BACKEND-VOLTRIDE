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
exports.ScooterModelEntitiesController = void 0;
const common_1 = require("@nestjs/common");
const scooter_model_entities_service_1 = require("./scooter-model-entities.service");
const create_scooter_model_entity_dto_1 = require("./dto/create-scooter-model-entity.dto");
const update_scooter_model_entity_dto_1 = require("./dto/update-scooter-model-entity.dto");
const swagger_1 = require("@nestjs/swagger");
const scooter_model_entity_1 = require("./domain/scooter-model-entity");
const passport_1 = require("@nestjs/passport");
const infinity_pagination_response_dto_1 = require("../utils/dto/infinity-pagination-response.dto");
const infinity_pagination_1 = require("../utils/infinity-pagination");
const find_all_scooter_model_entities_dto_1 = require("./dto/find-all-scooter-model-entities.dto");
let ScooterModelEntitiesController = class ScooterModelEntitiesController {
    constructor(scooterModelEntitiesService) {
        this.scooterModelEntitiesService = scooterModelEntitiesService;
    }
    create(createScooterModelEntityDto) {
        return this.scooterModelEntitiesService.create(createScooterModelEntityDto);
    }
    async findAll(query) {
        const page = query?.page ?? 1;
        let limit = query?.limit ?? 10;
        if (limit > 50) {
            limit = 50;
        }
        return (0, infinity_pagination_1.infinityPagination)(await this.scooterModelEntitiesService.findAllWithPagination({
            paginationOptions: { page, limit },
        }), { page, limit });
    }
    findById(id) {
        return this.scooterModelEntitiesService.findById(id);
    }
    update(id, updateScooterModelEntityDto) {
        return this.scooterModelEntitiesService.update(id, updateScooterModelEntityDto);
    }
    remove(id) {
        return this.scooterModelEntitiesService.remove(id);
    }
};
exports.ScooterModelEntitiesController = ScooterModelEntitiesController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiCreatedResponse)({ type: scooter_model_entity_1.ScooterModelEntity }),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_scooter_model_entity_dto_1.CreateScooterModelEntityDto]),
    __metadata("design:returntype", void 0)
], ScooterModelEntitiesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOkResponse)({ type: (0, infinity_pagination_response_dto_1.InfinityPaginationResponse)(scooter_model_entity_1.ScooterModelEntity) }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_all_scooter_model_entities_dto_1.FindAllScooterModelEntitiesDto]),
    __metadata("design:returntype", Promise)
], ScooterModelEntitiesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiParam)({ name: 'id', type: String, required: true }),
    (0, swagger_1.ApiOkResponse)({ type: scooter_model_entity_1.ScooterModelEntity }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ScooterModelEntitiesController.prototype, "findById", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiParam)({ name: 'id', type: String, required: true }),
    (0, swagger_1.ApiOkResponse)({ type: scooter_model_entity_1.ScooterModelEntity }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_scooter_model_entity_dto_1.UpdateScooterModelEntityDto]),
    __metadata("design:returntype", void 0)
], ScooterModelEntitiesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiParam)({ name: 'id', type: String, required: true }),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ScooterModelEntitiesController.prototype, "remove", null);
exports.ScooterModelEntitiesController = ScooterModelEntitiesController = __decorate([
    (0, swagger_1.ApiTags)('ScooterModelEntities'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Controller)({
        path: 'scooter-model-entities',
        version: '1',
    }),
    __metadata("design:paramtypes", [scooter_model_entities_service_1.ScooterModelEntitiesService])
], ScooterModelEntitiesController);
//# sourceMappingURL=scooter-model-entities.controller.js.map