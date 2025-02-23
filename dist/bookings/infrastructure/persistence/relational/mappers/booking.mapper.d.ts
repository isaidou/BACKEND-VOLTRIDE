import { Booking } from '../../../../domain/booking';
import { BookingEntity } from '../entities/booking.entity';
export declare class BookingMapper {
    static toDomain(raw: BookingEntity): Booking;
    static toPersistence(domain: Booking): BookingEntity;
}
