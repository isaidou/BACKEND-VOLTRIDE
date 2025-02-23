import { Injectable } from '@nestjs/common';
import { BookingRepository } from './infrastructure/persistence/booking.repository';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { IPaginationOptions } from '../utils/types/pagination-options';
import { Booking } from './domain/booking';

@Injectable()
export class BookingsService {
  constructor(private readonly bookingRepo: BookingRepository) {}

  async create(dto: CreateBookingDto): Promise<Booking> {
    return this.bookingRepo.create({
      userId: dto.userId,
      scooterId: dto.scooterId,
      startDatetime: new Date(dto.startDatetime),
      endDatetime: dto.endDatetime ? new Date(dto.endDatetime) : undefined,
      location: dto.location,
      status: dto.status || 'reserved', // ou valeur par défaut
      notes: dto.notes || '',
    });
  }

  async findAllWithPagination(paginationOptions: IPaginationOptions) {
    return this.bookingRepo.findAllWithPagination({ paginationOptions });
  }

  async findById(id: string) {
    return this.bookingRepo.findById(id);
  }

  async update(id: string, dto: UpdateBookingDto) {
    return this.bookingRepo.update(id, {
      userId: dto.userId,
      scooterId: dto.scooterId,
      startDatetime: dto.startDatetime
        ? new Date(dto.startDatetime)
        : undefined,
      endDatetime: dto.endDatetime ? new Date(dto.endDatetime) : undefined,
      location: dto.location,
      status: dto.status, // désormais présent dans le DTO
      notes: dto.notes, // désormais présent dans le DTO
    });
  }

  async remove(id: string) {
    return this.bookingRepo.remove(id);
  }
}
