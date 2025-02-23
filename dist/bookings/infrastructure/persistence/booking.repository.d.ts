import { IPaginationOptions } from '../../../utils/types/pagination-options';
import { NullableType } from '../../../utils/types/nullable.type';
import { Booking } from '../../domain/booking';
export declare abstract class BookingRepository {
    abstract create(data: Omit<Booking, 'id' | 'createdAt' | 'updatedAt'>): Promise<Booking>;
    abstract findAllWithPagination(params: {
        paginationOptions: IPaginationOptions;
    }): Promise<Booking[]>;
    abstract findById(id: Booking['id']): Promise<NullableType<Booking>>;
    abstract update(id: Booking['id'], payload: Partial<Booking>): Promise<Booking | null>;
    abstract remove(id: Booking['id']): Promise<void>;
}
