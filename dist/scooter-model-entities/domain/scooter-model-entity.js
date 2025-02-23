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
exports.ScooterModelEntity = void 0;
const swagger_1 = require("@nestjs/swagger");
class ScooterModelEntity {
}
exports.ScooterModelEntity = ScooterModelEntity;
__decorate([
    (0, swagger_1.ApiProperty)({ type: String }),
    __metadata("design:type", String)
], ScooterModelEntity.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], ScooterModelEntity.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], ScooterModelEntity.prototype, "updatedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'City 45' }),
    __metadata("design:type", String)
], ScooterModelEntity.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'VoltRide', required: false }),
    __metadata("design:type", String)
], ScooterModelEntity.prototype, "brand", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 50, description: 'Intervalle km avant maintenance' }),
    __metadata("design:type", Number)
], ScooterModelEntity.prototype, "maintenanceIntervalKm", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 6,
        description: 'Intervalle en mois avant maintenance',
    }),
    __metadata("design:type", Number)
], ScooterModelEntity.prototype, "maintenanceIntervalMonths", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Scooter urbain pour les petits trajets',
        required: false,
    }),
    __metadata("design:type", String)
], ScooterModelEntity.prototype, "description", void 0);
//# sourceMappingURL=scooter-model-entity.js.map