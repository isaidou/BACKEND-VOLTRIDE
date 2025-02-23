import { DeepPartial } from '../../../utils/types/deep-partial.type';
import { NullableType } from '../../../utils/types/nullable.type';
import { IPaginationOptions } from '../../../utils/types/pagination-options';
import { EventStore } from '../../domain/event-store';
export declare abstract class EventStoreRepository {
    abstract create(data: Omit<EventStore, 'id' | 'createdAt' | 'updatedAt'>): Promise<EventStore>;
    abstract findAllWithPagination({ paginationOptions, }: {
        paginationOptions: IPaginationOptions;
    }): Promise<EventStore[]>;
    abstract findById(id: EventStore['id']): Promise<NullableType<EventStore>>;
    abstract findByIds(ids: EventStore['id'][]): Promise<EventStore[]>;
    abstract update(id: EventStore['id'], payload: DeepPartial<EventStore>): Promise<EventStore | null>;
    abstract remove(id: EventStore['id']): Promise<void>;
}
