import { Module } from '@nestjs/common';
import { PartRepository } from '../part.repository';
import { PartRelationalRepository } from './repositories/part.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PartEntity } from './entities/part.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PartEntity])],
  providers: [
    {
      provide: PartRepository,
      useClass: PartRelationalRepository,
    },
  ],
  exports: [PartRepository],
})
export class RelationalPartPersistenceModule {}
