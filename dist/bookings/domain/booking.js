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
exports.Booking = void 0;
const swagger_1 = require("@nestjs/swagger");
class Booking {
}
exports.Booking = Booking;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], Booking.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], Booking.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], Booking.prototype, "updatedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'uuid-user' }),
    __metadata("design:type", String)
], Booking.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'uuid-scooter' }),
    __metadata("design:type", String)
], Booking.prototype, "scooterId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2025-04-01T10:00:00Z' }),
    __metadata("design:type", Date)
], Booking.prototype, "startDatetime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2025-04-01T11:00:00Z', required: false }),
    __metadata("design:type", Date)
], Booking.prototype, "endDatetime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '123 Main St', required: false }),
    __metadata("design:type", String)
], Booking.prototype, "location", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'reserved', description: 'Statut de la réservation' }),
    __metadata("design:type", String)
], Booking.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", String)
], Booking.prototype, "notes", void 0);
//# sourceMappingURL=booking.js.map