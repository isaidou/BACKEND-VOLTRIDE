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
exports.CreateInventoryTransactionDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateInventoryTransactionDto {
}
exports.CreateInventoryTransactionDto = CreateInventoryTransactionDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'uuid-part' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateInventoryTransactionDto.prototype, "partId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 10 }),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateInventoryTransactionDto.prototype, "quantityChange", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'IN', description: 'Type de transaction: IN ou OUT' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateInventoryTransactionDto.prototype, "transactionType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2025-06-01T12:00:00Z' }),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CreateInventoryTransactionDto.prototype, "transactionDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'purchase_order',
        description: 'Source de la transaction',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateInventoryTransactionDto.prototype, "sourceType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'uuid-of-source' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateInventoryTransactionDto.prototype, "sourceId", void 0);
//# sourceMappingURL=create-inventory-transaction.dto.js.map