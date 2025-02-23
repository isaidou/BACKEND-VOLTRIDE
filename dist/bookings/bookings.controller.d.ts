import { BookingsService } from './bookings.service';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { InfinityPaginationResponseDto } from '../utils/dto/infinity-pagination-response.dto';
import { Booking } from './domain/booking';
export declare class BookingsController {
    private readonly bookingsService;
    constructor(bookingsService: BookingsService);
    create(dto: CreateBookingDto): Promise<Booking>;
    findAll(page?: number, limit?: number): Promise<InfinityPaginationResponseDto<Booking>>;
    findById(id: string): Promise<import("../utils/types/nullable.type").NullableType<Booking>>;
    update(id: string, dto: UpdateBookingDto): Promise<Booking | null>;
    remove(id: string): Promise<void>;
}
