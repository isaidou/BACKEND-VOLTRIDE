import { Module } from '@nestjs/common';
import { BookingsService } from './bookings.service';
import { BookingsController } from './bookings.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookingEntity } from './infrastructure/persistence/relational/entities/booking.entity';
import { BookingRepository } from './infrastructure/persistence/booking.repository';
import { BookingRelationalRepository } from './infrastructure/persistence/relational/repositories/booking.repository';

@Module({
  imports: [TypeOrmModule.forFeature([BookingEntity])],
  controllers: [BookingsController],
  providers: [
    BookingsService,
    { provide: BookingRepository, useClass: BookingRelationalRepository },
  ],
  exports: [BookingsService],
})
export class BookingsModule {}
