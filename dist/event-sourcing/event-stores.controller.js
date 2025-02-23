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
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventStoresController = void 0;
const common_1 = require("@nestjs/common");
const event_stores_service_1 = require("./event-stores.service");
const create_event_store_dto_1 = require("./dto/create-event-store.dto");
const update_event_store_dto_1 = require("./dto/update-event-store.dto");
const swagger_1 = require("@nestjs/swagger");
const event_store_1 = require("./domain/event-store");
const passport_1 = require("@nestjs/passport");
const infinity_pagination_response_dto_1 = require("../utils/dto/infinity-pagination-response.dto");
const infinity_pagination_1 = require("../utils/infinity-pagination");
const find_all_event_stores_dto_1 = require("./dto/find-all-event-stores.dto");
let EventStoresController = class EventStoresController {
    constructor(eventStoresService) {
        this.eventStoresService = eventStoresService;
    }
    create(createEventStoreDto) {
        return this.eventStoresService.create(createEventStoreDto);
    }
    async findAll(query) {
        const page = query?.page ?? 1;
        let limit = query?.limit ?? 10;
        if (limit > 50) {
            limit = 50;
        }
        return (0, infinity_pagination_1.infinityPagination)(await this.eventStoresService.findAllWithPagination({
            paginationOptions: {
                page,
                limit,
            },
        }), { page, limit });
    }
    findById(id) {
        return this.eventStoresService.findById(id);
    }
    update(id, updateEventStoreDto) {
        return this.eventStoresService.update(id, updateEventStoreDto);
    }
    remove(id) {
        return this.eventStoresService.remove(id);
    }
};
exports.EventStoresController = EventStoresController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiCreatedResponse)({
        type: event_store_1.EventStore,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof create_event_store_dto_1.CreateEventStoreDto !== "undefined" && create_event_store_dto_1.CreateEventStoreDto) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], EventStoresController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOkResponse)({
        type: (0, infinity_pagination_response_dto_1.InfinityPaginationResponse)(event_store_1.EventStore),
    }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof find_all_event_stores_dto_1.FindAllEventStoresDto !== "undefined" && find_all_event_stores_dto_1.FindAllEventStoresDto) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], EventStoresController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiParam)({
        name: 'id',
        type: String,
        required: true,
    }),
    (0, swagger_1.ApiOkResponse)({
        type: event_store_1.EventStore,
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EventStoresController.prototype, "findById", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiParam)({
        name: 'id',
        type: String,
        required: true,
    }),
    (0, swagger_1.ApiOkResponse)({
        type: event_store_1.EventStore,
    }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_d = typeof update_event_store_dto_1.UpdateEventStoreDto !== "undefined" && update_event_store_dto_1.UpdateEventStoreDto) === "function" ? _d : Object]),
    __metadata("design:returntype", void 0)
], EventStoresController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiParam)({
        name: 'id',
        type: String,
        required: true,
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EventStoresController.prototype, "remove", null);
exports.EventStoresController = EventStoresController = __decorate([
    (0, swagger_1.ApiTags)('Eventstores'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Controller)({
        path: 'event-stores',
        version: '1',
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof event_stores_service_1.EventStoresService !== "undefined" && event_stores_service_1.EventStoresService) === "function" ? _a : Object])
], EventStoresController);
//# sourceMappingURL=event-stores.controller.js.map