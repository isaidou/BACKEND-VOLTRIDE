"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingMapper = void 0;
const booking_1 = require("../../../../domain/booking");
const booking_entity_1 = require("../entities/booking.entity");
class BookingMapper {
    static toDomain(raw) {
        const domain = new booking_1.Booking();
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
    static toPersistence(domain) {
        const entity = new booking_entity_1.BookingEntity();
        if (domain.id)
            entity.id = domain.id;
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
exports.BookingMapper = BookingMapper;
//# sourceMappingURL=booking.mapper.js.map