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
exports.Scooter = void 0;
const swagger_1 = require("@nestjs/swagger");
class Scooter {
}
exports.Scooter = Scooter;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], Scooter.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], Scooter.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], Scooter.prototype, "updatedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'SN123456' }),
    __metadata("design:type", String)
], Scooter.prototype, "serialNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'available', description: 'Statut du scooter' }),
    __metadata("design:type", String)
], Scooter.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 0 }),
    __metadata("design:type", Number)
], Scooter.prototype, "totalMileage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 0 }),
    __metadata("design:type", Number)
], Scooter.prototype, "totalChargeCycles", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2025-05-01' }),
    __metadata("design:type", Date)
], Scooter.prototype, "purchaseDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2027-05-01' }),
    __metadata("design:type", Date)
], Scooter.prototype, "warrantyEndDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'uuid-scooter-model' }),
    __metadata("design:type", String)
], Scooter.prototype, "scooterModelId", void 0);
//# sourceMappingURL=scooter.js.map