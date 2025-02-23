import { BookingRepository } from './infrastructure/persistence/booking.repository';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { IPaginationOptions } from '../utils/types/pagination-options';
import { Booking } from './domain/booking';
export declare class BookingsService {
    private readonly bookingRepo;
    constructor(bookingRepo: BookingRepository);
    create(dto: CreateBookingDto): Promise<Booking>;
    findAllWithPagination(paginationOptions: IPaginationOptions): Promise<Booking[]>;
    findById(id: string): Promise<import("../utils/types/nullable.type").NullableType<Booking>>;
    update(id: string, dto: UpdateBookingDto): Promise<Booking | null>;
    remove(id: string): Promise<void>;
}
