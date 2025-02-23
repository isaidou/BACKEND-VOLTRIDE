import { Module } from '@nestjs/common';
import { MaintenanceRepository } from '../maintenance.repository';
import { MaintenanceRelationalRepository } from './repositories/maintenance.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MaintenanceEntity } from './entities/maintenance.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MaintenanceEntity])],
  providers: [
    {
      provide: MaintenanceRepository,
      useClass: MaintenanceRelationalRepository,
    },
  ],
  exports: [MaintenanceRepository],
})
export class RelationalMaintenancePersistenceModule {}
