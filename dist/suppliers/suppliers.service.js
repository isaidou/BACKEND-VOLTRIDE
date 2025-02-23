"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuppliersService = void 0;
const common_1 = require("@nestjs/common");
const supplier_repository_1 = require("./infrastructure/persistence/supplier.repository");
let SuppliersService = class SuppliersService {
    constructor(supplierRepository) {
        this.supplierRepository = supplierRepository;
    }
    async create(dto) {
        return this.supplierRepository.create({
            name: dto.name,
            contactPerson: dto.contactPerson,
            phoneNumber: dto.phoneNumber,
            address: dto.address,
        });
    }
    findAllWithPagination({ paginationOptions, }) {
        return this.supplierRepository.findAllWithPagination({
            paginationOptions: {
                page: paginationOptions.page,
                limit: paginationOptions.limit,
            },
        });
    }
    findById(id) {
        return this.supplierRepository.findById(id);
    }
    findByIds(ids) {
        return this.supplierRepository.findByIds(ids);
    }
    async update(id, dto) {
        return this.supplierRepository.update(id, {
            name: dto.name,
            contactPerson: dto.contactPerson,
            phoneNumber: dto.phoneNumber,
            address: dto.address,
        });
    }
    remove(id) {
        return this.supplierRepository.remove(id);
    }
};
exports.SuppliersService = SuppliersService;
exports.SuppliersService = SuppliersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [supplier_repository_1.SupplierRepository])
], SuppliersService);
//# sourceMappingURL=suppliers.service.js.map