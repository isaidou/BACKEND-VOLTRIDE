import { Repository } from 'typeorm';
import { BookingRepository } from '../../booking.repository';
import { BookingEntity } from '../entities/booking.entity';
import { Booking } from '../../../../domain/booking';
import { IPaginationOptions } from '../../../../../utils/types/pagination-options';
import { NullableType } from '../../../../../utils/types/nullable.type';
export declare class BookingRelationalRepository implements BookingRepository {
    private readonly repo;
    constructor(repo: Repository<BookingEntity>);
    create(data: Omit<Booking, 'id'>): Promise<Booking>;
    findAllWithPagination({ paginationOptions, }: {
        paginationOptions: IPaginationOptions;
    }): Promise<Booking[]>;
    findById(id: string): Promise<NullableType<Booking>>;
    update(id: string, payload: Partial<Booking>): Promise<Booking | null>;
    remove(id: string): Promise<void>;
}
