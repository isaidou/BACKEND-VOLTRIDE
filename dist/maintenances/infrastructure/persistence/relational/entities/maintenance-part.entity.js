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
exports.MaintenancePartEntity = void 0;
const typeorm_1 = require("typeorm");
const maintenance_entity_1 = require("./maintenance.entity");
const part_entity_1 = require("../../../../../parts/infrastructure/persistence/relational/entities/part.entity");
let MaintenancePartEntity = class MaintenancePartEntity {
};
exports.MaintenancePartEntity = MaintenancePartEntity;
__decorate([
    (0, typeorm_1.PrimaryColumn)('uuid', { name: 'maintenance_id' }),
    __metadata("design:type", String)
], MaintenancePartEntity.prototype, "maintenanceId", void 0);
__decorate([
    (0, typeorm_1.PrimaryColumn)('uuid', { name: 'part_id' }),
    __metadata("design:type", String)
], MaintenancePartEntity.prototype, "partId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => maintenance_entity_1.MaintenanceEntity, (maintenance) => maintenance.partsUsed, {
        onDelete: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)({ name: 'maintenance_id' }),
    __metadata("design:type", maintenance_entity_1.MaintenanceEntity)
], MaintenancePartEntity.prototype, "maintenance", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => part_entity_1.PartEntity, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'part_id' }),
    __metadata("design:type", part_entity_1.PartEntity)
], MaintenancePartEntity.prototype, "part", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 1 }),
    __metadata("design:type", Number)
], MaintenancePartEntity.prototype, "quantityUsed", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], MaintenancePartEntity.prototype, "cost", void 0);
exports.MaintenancePartEntity = MaintenancePartEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'maintenance_parts' })
], MaintenancePartEntity);
//# sourceMappingURL=maintenance-part.entity.js.map