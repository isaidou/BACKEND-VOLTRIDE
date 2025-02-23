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
exports.PlanMaintenanceHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const plan_maintenance_command_1 = require("../impl/plan-maintenance.command");
const event_stores_service_1 = require("../../event-stores.service");
let PlanMaintenanceHandler = class PlanMaintenanceHandler {
    constructor(eventStoreService) {
        this.eventStoreService = eventStoreService;
    }
    async execute(command) {
        const { scooterId, maintenanceDate, type, cost, performedById } = command;
        const existingEvents = await this.eventStoreService.getEventsForAggregate(scooterId);
        const lastVersion = existingEvents.length > 0
            ? existingEvents[existingEvents.length - 1].version
            : 0;
        await this.eventStoreService.saveEvent({
            aggregateId: scooterId,
            aggregateType: 'Scooter',
            eventType: 'MaintenancePlanned',
            eventPayload: {
                maintenanceDate,
                type,
                cost,
                performedById,
            },
            eventTimestamp: new Date(),
            version: lastVersion + 1,
            processed: false,
        });
    }
};
exports.PlanMaintenanceHandler = PlanMaintenanceHandler;
exports.PlanMaintenanceHandler = PlanMaintenanceHandler = __decorate([
    (0, cqrs_1.CommandHandler)(plan_maintenance_command_1.PlanMaintenanceCommand),
    __metadata("design:paramtypes", [event_stores_service_1.EventStoreService])
], PlanMaintenanceHandler);
//# sourceMappingURL=plan-maintenance.handler.js.map