import { IEventHandler } from '@nestjs/cqrs';
import { EventStoreService } from '../../event-stores.service';
import { MaintenancesService } from '../../../maintenances/maintenances.service';
import { EventEntity } from '../../infrastructure/persistence/relational/entities/event.entity';
export declare class MaintenancePlannedHandler implements IEventHandler<EventEntity> {
    private readonly eventStoreService;
    private readonly maintenancesService;
    private readonly logger;
    constructor(eventStoreService: EventStoreService, maintenancesService: MaintenancesService);
    handle(event: EventEntity): Promise<void>;
}
