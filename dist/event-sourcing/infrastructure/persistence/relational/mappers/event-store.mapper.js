"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventStoreMapper = void 0;
const event_store_1 = require("../../../../domain/event-store");
const event_entity_1 = require("../entities/event.entity");
class EventStoreMapper {
    static toDomain(raw) {
        const domainEntity = new event_store_1.EventStore();
        domainEntity.id = raw.id;
        domainEntity.createdAt = raw.createdAt;
        domainEntity.updatedAt = raw.updatedAt;
        return domainEntity;
    }
    static toPersistence(domainEntity) {
        const persistenceEntity = new event_entity_1.EventStoreEntity();
        if (domainEntity.id) {
            persistenceEntity.id = domainEntity.id;
        }
        persistenceEntity.createdAt = domainEntity.createdAt;
        persistenceEntity.updatedAt = domainEntity.updatedAt;
        return persistenceEntity;
    }
}
exports.EventStoreMapper = EventStoreMapper;
//# sourceMappingURL=event-store.mapper.js.map