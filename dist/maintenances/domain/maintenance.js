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
exports.Maintenance = void 0;
const swagger_1 = require("@nestjs/swagger");
class Maintenance {
}
exports.Maintenance = Maintenance;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], Maintenance.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], Maintenance.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], Maintenance.prototype, "updatedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'preventive' }),
    __metadata("design:type", String)
], Maintenance.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Date de la maintenance',
        example: '2025-03-01T10:00:00Z',
    }),
    __metadata("design:type", Date)
], Maintenance.prototype, "maintenanceDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 100.5 }),
    __metadata("design:type", Number)
], Maintenance.prototype, "cost", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Révision semestrielle', required: false }),
    __metadata("design:type", String)
], Maintenance.prototype, "notes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'uuid-scooter',
        description: 'ID du scooter concerné',
    }),
    __metadata("design:type", String)
], Maintenance.prototype, "scooterId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'uuid-user',
        description: 'ID de l’utilisateur (technicien)',
    }),
    __metadata("design:type", String)
], Maintenance.prototype, "performedById", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 12000,
        required: false,
        description: 'Kilométrage au moment de la maintenance',
    }),
    __metadata("design:type", Number)
], Maintenance.prototype, "currentMileage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 50,
        required: false,
        description: 'Nombre de cycles de charge enregistrés',
    }),
    __metadata("design:type", Number)
], Maintenance.prototype, "currentChargeCycles", void 0);
//# sourceMappingURL=maintenance.js.map