import { Module } from '@nestjs/common';
import { ScootersService } from './scooters.service';
import { ScootersController } from './scooters.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScooterEntity } from './infrastructure/persistence/relational/entities/scooter.entity';
import { ScooterRepository } from './infrastructure/persistence/scooter.repository';
import { ScooterRelationalRepository } from './infrastructure/persistence/relational/repositories/scooter.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ScooterEntity])],
  controllers: [ScootersController],
  providers: [
    ScootersService,
    {
      provide: ScooterRepository,
      useClass: ScooterRelationalRepository,
    },
  ],
  exports: [ScootersService],
})
export class ScootersModule {}
