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
exports.Part = void 0;
const swagger_1 = require("@nestjs/swagger");
class Part {
}
exports.Part = Part;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], Part.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Battery' }),
    __metadata("design:type", String)
], Part.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'High performance battery', required: false }),
    __metadata("design:type", String)
], Part.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 100 }),
    __metadata("design:type", Number)
], Part.prototype, "stockQuantity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 5,
        description: 'Seuil minimal pour déclencher une alerte',
    }),
    __metadata("design:type", Number)
], Part.prototype, "minStockThreshold", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 199.99 }),
    __metadata("design:type", Number)
], Part.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", Date)
], Part.prototype, "lastEventTimestamp", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], Part.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], Part.prototype, "updatedAt", void 0);
//# sourceMappingURL=part.js.map