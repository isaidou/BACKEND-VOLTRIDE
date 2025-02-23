// src/maintenances/maintenances.module.ts
import { Module } from '@nestjs/common';
import { MaintenancesService } from './maintenances.service';
import { MaintenancesController } from './maintenances.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MaintenanceEntity } from './infrastructure/persistence/relational/entities/maintenance.entity';
import { MaintenanceRepository } from './infrastructure/persistence/maintenance.repository';
import { MaintenanceRelationalRepository } from './infrastructure/persistence/relational/repositories/maintenance.repository';

@Module({
  imports: [TypeOrmModule.forFeature([MaintenanceEntity])],
  controllers: [MaintenancesController],
  providers: [
    MaintenancesService,
    {
      provide: MaintenanceRepository,
      useClass: MaintenanceRelationalRepository,
    },
  ],
  exports: [MaintenancesService], // Export du service
})
export class MaintenancesModule {}
