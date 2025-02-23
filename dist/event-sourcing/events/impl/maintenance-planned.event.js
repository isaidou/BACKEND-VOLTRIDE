"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaintenancePlannedEvent = void 0;
class MaintenancePlannedEvent {
    constructor(aggregateId, maintenanceDate, type, cost, performedById, version) {
        this.aggregateId = aggregateId;
        this.maintenanceDate = maintenanceDate;
        this.type = type;
        this.cost = cost;
        this.performedById = performedById;
        this.version = version;
    }
}
exports.MaintenancePlannedEvent = MaintenancePlannedEvent;
//# sourceMappingURL=maintenance-planned.event.js.map