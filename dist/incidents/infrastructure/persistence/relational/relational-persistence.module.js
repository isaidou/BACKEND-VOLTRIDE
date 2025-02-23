"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelationalIncidentPersistenceModule = void 0;
const common_1 = require("@nestjs/common");
const incident_repository_1 = require("../incident.repository");
const incident_repository_2 = require("./repositories/incident.repository");
const typeorm_1 = require("@nestjs/typeorm");
const incident_entity_1 = require("./entities/incident.entity");
let RelationalIncidentPersistenceModule = class RelationalIncidentPersistenceModule {
};
exports.RelationalIncidentPersistenceModule = RelationalIncidentPersistenceModule;
exports.RelationalIncidentPersistenceModule = RelationalIncidentPersistenceModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([incident_entity_1.IncidentEntity])],
        providers: [
            {
                provide: incident_repository_1.IncidentRepository,
                useClass: incident_repository_2.IncidentRelationalRepository,
            },
        ],
        exports: [incident_repository_1.IncidentRepository],
    })
], RelationalIncidentPersistenceModule);
//# sourceMappingURL=relational-persistence.module.js.map