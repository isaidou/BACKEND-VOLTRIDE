import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BookingRepository } from '../../booking.repository';
import { BookingMapper } from '../mappers/booking.mapper';
import { BookingEntity } from '../entities/booking.entity';
import { Booking } from '../../../../domain/booking';
import { IPaginationOptions } from '../../../../../utils/types/pagination-options';
import { NullableType } from '../../../../../utils/types/nullable.type';

@Injectable()
export class BookingRelationalRepository implements BookingRepository {
  constructor(
    @InjectRepository(BookingEntity)
    private readonly repo: Repository<BookingEntity>,
  ) {}

  async create(data: Omit<Booking, 'id'>): Promise<Booking> {
    const entity = BookingMapper.toPersistence(data as Booking);
    const newEntity = await this.repo.save(this.repo.create(entity));
    return BookingMapper.toDomain(newEntity);
  }

  async findAllWithPagination({
    paginationOptions,
  }: {
    paginationOptions: IPaginationOptions;
  }): Promise<Booking[]> {
    const { page, limit } = paginationOptions;
    const entities = await this.repo.find({
      skip: (page - 1) * limit,
      take: limit,
      order: { createdAt: 'DESC' },
    });
    return entities.map(BookingMapper.toDomain);
  }

  async findById(id: string): Promise<NullableType<Booking>> {
    const entity = await this.repo.findOne({ where: { id } });
    return entity ? BookingMapper.toDomain(entity) : null;
  }

  async update(id: string, payload: Partial<Booking>): Promise<Booking | null> {
    const existing = await this.repo.findOne({ where: { id } });
    if (!existing) return null;
    const merged = this.repo.merge(
      existing,
      BookingMapper.toPersistence({
        ...BookingMapper.toDomain(existing),
        ...payload,
      }),
    );
    const updated = await this.repo.save(merged);
    return BookingMapper.toDomain(updated);
  }

  async remove(id: string): Promise<void> {
    await this.repo.delete(id);
  }
}
