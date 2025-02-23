"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaintenancesModule = void 0;
const common_1 = require("@nestjs/common");
const maintenances_service_1 = require("./maintenances.service");
const maintenances_controller_1 = require("./maintenances.controller");
const typeorm_1 = require("@nestjs/typeorm");
const maintenance_entity_1 = require("./infrastructure/persistence/relational/entities/maintenance.entity");
const maintenance_repository_1 = require("./infrastructure/persistence/maintenance.repository");
const maintenance_repository_2 = require("./infrastructure/persistence/relational/repositories/maintenance.repository");
let MaintenancesModule = class MaintenancesModule {
};
exports.MaintenancesModule = MaintenancesModule;
exports.MaintenancesModule = MaintenancesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([maintenance_entity_1.MaintenanceEntity])],
        controllers: [maintenances_controller_1.MaintenancesController],
        providers: [
            maintenances_service_1.MaintenancesService,
            {
                provide: maintenance_repository_1.MaintenanceRepository,
                useClass: maintenance_repository_2.MaintenanceRelationalRepository,
            },
        ],
        exports: [maintenances_service_1.MaintenancesService],
    })
], MaintenancesModule);
//# sourceMappingURL=maintenances.module.js.map