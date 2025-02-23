import { EventStoresService } from './event-stores.service';
import { CreateEventStoreDto } from './dto/create-event-store.dto';
import { UpdateEventStoreDto } from './dto/update-event-store.dto';
import { EventStore } from './domain/event-store';
import { InfinityPaginationResponseDto } from '../utils/dto/infinity-pagination-response.dto';
import { FindAllEventStoresDto } from './dto/find-all-event-stores.dto';
export declare class EventStoresController {
    private readonly eventStoresService;
    constructor(eventStoresService: EventStoresService);
    create(createEventStoreDto: CreateEventStoreDto): any;
    findAll(query: FindAllEventStoresDto): Promise<InfinityPaginationResponseDto<EventStore>>;
    findById(id: string): any;
    update(id: string, updateEventStoreDto: UpdateEventStoreDto): any;
    remove(id: string): any;
}
