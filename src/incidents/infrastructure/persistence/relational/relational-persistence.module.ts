import { Module } from '@nestjs/common';
import { IncidentRepository } from '../incident.repository';
import { IncidentRelationalRepository } from './repositories/incident.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IncidentEntity } from './entities/incident.entity';

@Module({
  imports: [TypeOrmModule.forFeature([IncidentEntity])],
  providers: [
    {
      provide: IncidentRepository,
      useClass: IncidentRelationalRepository,
    },
  ],
  exports: [IncidentRepository],
})
export class RelationalIncidentPersistenceModule {}
