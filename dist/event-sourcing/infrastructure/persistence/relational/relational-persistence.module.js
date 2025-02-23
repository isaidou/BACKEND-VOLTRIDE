"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelationalEventStorePersistenceModule = void 0;
const common_1 = require("@nestjs/common");
const event_store_repository_1 = require("../event-store.repository");
const event_store_repository_2 = require("./repositories/event-store.repository");
const typeorm_1 = require("@nestjs/typeorm");
const event_entity_1 = require("./entities/event.entity");
let RelationalEventStorePersistenceModule = class RelationalEventStorePersistenceModule {
};
exports.RelationalEventStorePersistenceModule = RelationalEventStorePersistenceModule;
exports.RelationalEventStorePersistenceModule = RelationalEventStorePersistenceModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([event_entity_1.EventEntity])],
        providers: [
            {
                provide: event_store_repository_1.EventStoreRepository,
                useClass: event_store_repository_2.EventStoreRelationalRepository,
            },
        ],
        exports: [event_store_repository_1.EventStoreRepository],
    })
], RelationalEventStorePersistenceModule);
//# sourceMappingURL=relational-persistence.module.js.map