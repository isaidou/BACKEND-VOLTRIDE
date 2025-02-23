import { ICommandHandler } from '@nestjs/cqrs';
import { PlanMaintenanceCommand } from '../impl/plan-maintenance.command';
import { EventStoreService } from '../../event-stores.service';
export declare class PlanMaintenanceHandler implements ICommandHandler<PlanMaintenanceCommand> {
    private readonly eventStoreService;
    constructor(eventStoreService: EventStoreService);
    execute(command: PlanMaintenanceCommand): Promise<void>;
}
