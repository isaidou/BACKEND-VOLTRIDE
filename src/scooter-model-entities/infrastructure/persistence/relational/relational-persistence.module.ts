import { Module } from '@nestjs/common';
import { ScooterModelEntityRepository } from '../scooter-model-entity.repository';
import { ScooterModelEntityRelationalRepository } from './repositories/scooter-model-entity.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScooterModelEntityEntity } from './entities/scooter-model-entity.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ScooterModelEntityEntity])],
  providers: [
    {
      provide: ScooterModelEntityRepository,
      useClass: ScooterModelEntityRelationalRepository,
    },
  ],
  exports: [ScooterModelEntityRepository],
})
export class RelationalScooterModelEntityPersistenceModule {}
