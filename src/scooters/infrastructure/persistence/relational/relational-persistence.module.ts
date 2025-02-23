import { Module } from '@nestjs/common';
import { ScooterRepository } from '../scooter.repository';
import { ScooterRelationalRepository } from './repositories/scooter.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScooterEntity } from './entities/scooter.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ScooterEntity])],
  providers: [
    {
      provide: ScooterRepository,
      useClass: ScooterRelationalRepository,
    },
  ],
  exports: [ScooterRepository],
})
export class RelationalScooterPersistenceModule {}
