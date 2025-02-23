"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventSourcingModule = exports.EventHandlers = exports.CommandHandlers = void 0;
const common_1 = require("@nestjs/common");
const cqrs_1 = require("@nestjs/cqrs");
const typeorm_1 = require("@nestjs/typeorm");
const event_stores_service_1 = require("./event-stores.service");
const event_entity_1 = require("./infrastructure/persistence/relational/entities/event.entity");
const plan_maintenance_handler_1 = require("./commands/handlers/plan-maintenance.handler");
const maintenance_planned_handler_1 = require("./events/handlers/maintenance-planned.handler");
const maintenances_module_1 = require("../maintenances/maintenances.module");
exports.CommandHandlers = [plan_maintenance_handler_1.PlanMaintenanceHandler];
exports.EventHandlers = [maintenance_planned_handler_1.MaintenancePlannedHandler];
let EventSourcingModule = class EventSourcingModule {
};
exports.EventSourcingModule = EventSourcingModule;
exports.EventSourcingModule = EventSourcingModule = __decorate([
    (0, common_1.Module)({
        imports: [
            cqrs_1.CqrsModule,
            typeorm_1.TypeOrmModule.forFeature([event_entity_1.EventEntity]),
            maintenances_module_1.MaintenancesModule,
        ],
        providers: [event_stores_service_1.EventStoreService, ...exports.CommandHandlers, ...exports.EventHandlers],
        exports: [event_stores_service_1.EventStoreService],
    })
], EventSourcingModule);
//# sourceMappingURL=event-sourcing.module.js.map