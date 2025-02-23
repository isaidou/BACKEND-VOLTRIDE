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
exports.InventoryTransaction = void 0;
const swagger_1 = require("@nestjs/swagger");
class InventoryTransaction {
}
exports.InventoryTransaction = InventoryTransaction;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], InventoryTransaction.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], InventoryTransaction.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], InventoryTransaction.prototype, "updatedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'uuid-part',
        description: 'ID de la pièce concernée',
    }),
    __metadata("design:type", String)
], InventoryTransaction.prototype, "partId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 10,
        description: 'Variation de stock (positive pour IN, négative pour OUT)',
    }),
    __metadata("design:type", Number)
], InventoryTransaction.prototype, "quantityChange", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'IN',
        description: 'Type de transaction (IN ou OUT)',
    }),
    __metadata("design:type", String)
], InventoryTransaction.prototype, "transactionType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2025-06-01T12:00:00Z',
        description: 'Date de la transaction',
    }),
    __metadata("design:type", Date)
], InventoryTransaction.prototype, "transactionDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'purchase_order',
        description: 'Origine de la transaction (purchase_order ou maintenance)',
    }),
    __metadata("design:type", String)
], InventoryTransaction.prototype, "sourceType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'uuid-of-source',
        description: 'ID de la source (commande ou maintenance)',
    }),
    __metadata("design:type", String)
], InventoryTransaction.prototype, "sourceId", void 0);
//# sourceMappingURL=inventory-transaction.js.map