"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryTransactionsModule = void 0;
const common_1 = require("@nestjs/common");
const inventory_transactions_service_1 = require("./inventory-transactions.service");
const inventory_transactions_controller_1 = require("./inventory-transactions.controller");
const typeorm_1 = require("@nestjs/typeorm");
const inventory_transaction_entity_1 = require("./infrastructure/persistence/relational/entities/inventory-transaction.entity");
const inventory_transaction_repository_1 = require("./infrastructure/persistence/inventory-transaction.repository");
const inventory_transaction_repository_2 = require("./infrastructure/persistence/relational/repositories/inventory-transaction.repository");
let InventoryTransactionsModule = class InventoryTransactionsModule {
};
exports.InventoryTransactionsModule = InventoryTransactionsModule;
exports.InventoryTransactionsModule = InventoryTransactionsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([inventory_transaction_entity_1.InventoryTransactionEntity])],
        controllers: [inventory_transactions_controller_1.InventoryTransactionsController],
        providers: [
            inventory_transactions_service_1.InventoryTransactionsService,
            {
                provide: inventory_transaction_repository_1.InventoryTransactionRepository,
                useClass: inventory_transaction_repository_2.InventoryTransactionRelationalRepository,
            },
        ],
        exports: [inventory_transactions_service_1.InventoryTransactionsService],
    })
], InventoryTransactionsModule);
//# sourceMappingURL=inventory-transactions.module.js.map