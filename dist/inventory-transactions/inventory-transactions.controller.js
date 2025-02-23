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
exports.InventoryTransactionsController = void 0;
const common_1 = require("@nestjs/common");
const inventory_transactions_service_1 = require("./inventory-transactions.service");
const create_inventory_transaction_dto_1 = require("./dto/create-inventory-transaction.dto");
const update_inventory_transaction_dto_1 = require("./dto/update-inventory-transaction.dto");
const swagger_1 = require("@nestjs/swagger");
const passport_1 = require("@nestjs/passport");
const infinity_pagination_response_dto_1 = require("../utils/dto/infinity-pagination-response.dto");
const infinity_pagination_1 = require("../utils/infinity-pagination");
const inventory_transaction_1 = require("./domain/inventory-transaction");
let InventoryTransactionsController = class InventoryTransactionsController {
    constructor(inventoryTransactionsService) {
        this.inventoryTransactionsService = inventoryTransactionsService;
    }
    create(dto) {
        return this.inventoryTransactionsService.create(dto);
    }
    async findAll(page = 1, limit = 10) {
        if (limit > 50)
            limit = 50;
        const data = await this.inventoryTransactionsService.findAllWithPagination({
            page: +page,
            limit: +limit,
        });
        return (0, infinity_pagination_1.infinityPagination)(data, { page: +page, limit: +limit });
    }
    findById(id) {
        return this.inventoryTransactionsService.findById(id);
    }
    update(id, dto) {
        return this.inventoryTransactionsService.update(id, dto);
    }
    remove(id) {
        return this.inventoryTransactionsService.remove(id);
    }
};
exports.InventoryTransactionsController = InventoryTransactionsController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, swagger_1.ApiCreatedResponse)({ type: inventory_transaction_1.InventoryTransaction }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_inventory_transaction_dto_1.CreateInventoryTransactionDto]),
    __metadata("design:returntype", void 0)
], InventoryTransactionsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOkResponse)({ type: (0, infinity_pagination_response_dto_1.InfinityPaginationResponse)(inventory_transaction_1.InventoryTransaction) }),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], InventoryTransactionsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiParam)({ name: 'id', type: String, required: true }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], InventoryTransactionsController.prototype, "findById", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiParam)({ name: 'id', type: String, required: true }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_inventory_transaction_dto_1.UpdateInventoryTransactionDto]),
    __metadata("design:returntype", void 0)
], InventoryTransactionsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], InventoryTransactionsController.prototype, "remove", null);
exports.InventoryTransactionsController = InventoryTransactionsController = __decorate([
    (0, swagger_1.ApiTags)('Inventory Transactions'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Controller)({ path: 'inventory-transactions', version: '1' }),
    __metadata("design:paramtypes", [inventory_transactions_service_1.InventoryTransactionsService])
], InventoryTransactionsController);
//# sourceMappingURL=inventory-transactions.controller.js.map