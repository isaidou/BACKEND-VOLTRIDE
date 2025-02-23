"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelationalInventoryTransactionPersistenceModule = void 0;
const common_1 = require("@nestjs/common");
const inventory_transaction_repository_1 = require("../inventory-transaction.repository");
const inventory_transaction_repository_2 = require("./repositories/inventory-transaction.repository");
const typeorm_1 = require("@nestjs/typeorm");
const inventory_transaction_entity_1 = require("./entities/inventory-transaction.entity");
let RelationalInventoryTransactionPersistenceModule = class RelationalInventoryTransactionPersistenceModule {
};
exports.RelationalInventoryTransactionPersistenceModule = RelationalInventoryTransactionPersistenceModule;
exports.RelationalInventoryTransactionPersistenceModule = RelationalInventoryTransactionPersistenceModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([inventory_transaction_entity_1.InventoryTransactionEntity])],
        providers: [
            {
                provide: inventory_transaction_repository_1.InventoryTransactionRepository,
                useClass: inventory_transaction_repository_2.InventoryTransactionRelationalRepository,
            },
        ],
        exports: [inventory_transaction_repository_1.InventoryTransactionRepository],
    })
], RelationalInventoryTransactionPersistenceModule);
//# sourceMappingURL=relational-persistence.module.js.map