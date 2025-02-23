import { Repository } from 'typeorm';
import { EventStoreEntity } from '../entities/event.entity';
import { NullableType } from '../../../../../utils/types/nullable.type';
import { EventStore } from '../../../../domain/event-store';
import { EventStoreRepository } from '../../event-store.repository';
import { IPaginationOptions } from '../../../../../utils/types/pagination-options';
export declare class EventStoreRelationalRepository implements EventStoreRepository {
    private readonly eventStoreRepository;
    constructor(eventStoreRepository: Repository<EventStoreEntity>);
    create(data: EventStore): Promise<EventStore>;
    findAllWithPagination({ paginationOptions, }: {
        paginationOptions: IPaginationOptions;
    }): Promise<EventStore[]>;
    findById(id: EventStore['id']): Promise<NullableType<EventStore>>;
    findByIds(ids: EventStore['id'][]): Promise<EventStore[]>;
    update(id: EventStore['id'], payload: Partial<EventStore>): Promise<EventStore>;
    remove(id: EventStore['id']): Promise<void>;
}
