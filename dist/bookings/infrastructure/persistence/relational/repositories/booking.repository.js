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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingRelationalRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const booking_mapper_1 = require("../mappers/booking.mapper");
const booking_entity_1 = require("../entities/booking.entity");
let BookingRelationalRepository = class BookingRelationalRepository {
    constructor(repo) {
        this.repo = repo;
    }
    async create(data) {
        const entity = booking_mapper_1.BookingMapper.toPersistence(data);
        const newEntity = await this.repo.save(this.repo.create(entity));
        return booking_mapper_1.BookingMapper.toDomain(newEntity);
    }
    async findAllWithPagination({ paginationOptions, }) {
        const { page, limit } = paginationOptions;
        const entities = await this.repo.find({
            skip: (page - 1) * limit,
            take: limit,
            order: { createdAt: 'DESC' },
        });
        return entities.map(booking_mapper_1.BookingMapper.toDomain);
    }
    async findById(id) {
        const entity = await this.repo.findOne({ where: { id } });
        return entity ? booking_mapper_1.BookingMapper.toDomain(entity) : null;
    }
    async update(id, payload) {
        const existing = await this.repo.findOne({ where: { id } });
        if (!existing)
            return null;
        const merged = this.repo.merge(existing, booking_mapper_1.BookingMapper.toPersistence({
            ...booking_mapper_1.BookingMapper.toDomain(existing),
            ...payload,
        }));
        const updated = await this.repo.save(merged);
        return booking_mapper_1.BookingMapper.toDomain(updated);
    }
    async remove(id) {
        await this.repo.delete(id);
    }
};
exports.BookingRelationalRepository = BookingRelationalRepository;
exports.BookingRelationalRepository = BookingRelationalRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(booking_entity_1.BookingEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], BookingRelationalRepository);
//# sourceMappingURL=booking.repository.js.map