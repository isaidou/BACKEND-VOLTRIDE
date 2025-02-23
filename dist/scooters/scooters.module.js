"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScootersModule = void 0;
const common_1 = require("@nestjs/common");
const scooters_service_1 = require("./scooters.service");
const scooters_controller_1 = require("./scooters.controller");
const typeorm_1 = require("@nestjs/typeorm");
const scooter_entity_1 = require("./infrastructure/persistence/relational/entities/scooter.entity");
const scooter_repository_1 = require("./infrastructure/persistence/scooter.repository");
const scooter_repository_2 = require("./infrastructure/persistence/relational/repositories/scooter.repository");
let ScootersModule = class ScootersModule {
};
exports.ScootersModule = ScootersModule;
exports.ScootersModule = ScootersModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([scooter_entity_1.ScooterEntity])],
        controllers: [scooters_controller_1.ScootersController],
        providers: [
            scooters_service_1.ScootersService,
            {
                provide: scooter_repository_1.ScooterRepository,
                useClass: scooter_repository_2.ScooterRelationalRepository,
            },
        ],
        exports: [scooters_service_1.ScootersService],
    })
], ScootersModule);
//# sourceMappingURL=scooters.module.js.map