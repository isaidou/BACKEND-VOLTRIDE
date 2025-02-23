import { Repository } from 'typeorm';
import { EventEntity } from './infrastructure/persistence/relational/entities/event.entity';
export declare class EventStoreService {
    private readonly eventRepository;
    constructor(eventRepository: Repository<EventEntity>);
    saveEvent(eventData: Omit<EventEntity, 'id'>): Promise<EventEntity>;
    getEventsForAggregate(aggregateId: string): Promise<EventEntity[]>;
    markEventAsProcessed(id: string): Promise<void>;
    getUnprocessedEvents(): Promise<EventEntity[]>;
}
