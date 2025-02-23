import { EventStore } from '../../../../domain/event-store';
import { EventStoreEntity } from '../entities/event.entity';
export declare class EventStoreMapper {
    static toDomain(raw: EventStoreEntity): EventStore;
    static toPersistence(domainEntity: EventStore): EventStoreEntity;
}
