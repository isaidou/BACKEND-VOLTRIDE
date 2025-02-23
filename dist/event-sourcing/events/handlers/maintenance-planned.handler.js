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
var MaintenancePlannedHandler_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaintenancePlannedHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const common_1 = require("@nestjs/common");
const event_stores_service_1 = require("../../event-stores.service");
const maintenances_service_1 = require("../../../maintenances/maintenances.service");
const maintenance_planned_event_1 = require("../impl/maintenance-planned.event");
let MaintenancePlannedHandler = MaintenancePlannedHandler_1 = class MaintenancePlannedHandler {
    constructor(eventStoreService, maintenancesService) {
        this.eventStoreService = eventStoreService;
        this.maintenancesService = maintenancesService;
        this.logger = new common_1.Logger(MaintenancePlannedHandler_1.name);
    }
    async handle(event) {
        if (event.eventType !== 'MaintenancePlanned') {
            return;
        }
        if (event.processed) {
            this.logger.log(`Événement déjà traité : ${event.id}`);
            return;
        }
        this.logger.log(`Traitement de l'événement MaintenancePlanned pour l'agrégat ${event.aggregateId}`);
        const payload = event.eventPayload;
        await this.maintenancesService.create({
            type: payload.type,
            maintenanceDate: payload.maintenanceDate,
            cost: payload.cost,
            notes: `Généré depuis l'événement: ${event.id}`,
            scooterId: event.aggregateId,
            performedById: payload.performedById,
        });
        await this.eventStoreService.markEventAsProcessed(event.id);
    }
};
exports.MaintenancePlannedHandler = MaintenancePlannedHandler;
exports.MaintenancePlannedHandler = MaintenancePlannedHandler = MaintenancePlannedHandler_1 = __decorate([
    (0, cqrs_1.EventsHandler)(maintenance_planned_event_1.MaintenancePlannedEvent),
    __metadata("design:paramtypes", [event_stores_service_1.EventStoreService,
        maintenances_service_1.MaintenancesService])
], MaintenancePlannedHandler);
//# sourceMappingURL=maintenance-planned.handler.js.map