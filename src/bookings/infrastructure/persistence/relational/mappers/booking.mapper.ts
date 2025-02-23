import { Booking } from '../../../../domain/booking';
import { BookingEntity } from '../entities/booking.entity';

export class BookingMapper {
  static toDomain(raw: BookingEntity): Booking {
    const domain = new Booking();
    domain.id = raw.id;
    domain.createdAt = raw.createdAt;
    domain.updatedAt = raw.updatedAt;
    domain.userId = raw.userId;
    domain.scooterId = raw.scooterId;
    domain.startDatetime = raw.startDatetime;
    domain.endDatetime = raw.endDatetime;
    domain.location = raw.location;
    domain.status = raw.status;
    domain.notes = raw.notes;
    return domain;
  }

  static toPersistence(domain: Booking): BookingEntity {
    const entity = new BookingEntity();
    if (domain.id) entity.id = domain.id;
    entity.createdAt = domain.createdAt;
    entity.updatedAt = domain.updatedAt;
    entity.userId = domain.userId;
    entity.scooterId = domain.scooterId;
    entity.startDatetime = domain.startDatetime;
    entity.endDatetime = domain.endDatetime;
    entity.location = domain.location;
    entity.status = domain.status;
    entity.notes = domain.notes;
    return entity;
  }
}
