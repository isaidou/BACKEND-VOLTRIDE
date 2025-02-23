import { PlanMaintenanceHandler } from './commands/handlers/plan-maintenance.handler';
import { MaintenancePlannedHandler } from './events/handlers/maintenance-planned.handler';
export declare const CommandHandlers: (typeof PlanMaintenanceHandler)[];
export declare const EventHandlers: (typeof MaintenancePlannedHandler)[];
export declare class EventSourcingModule {
}
