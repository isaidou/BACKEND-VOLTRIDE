import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventStoreService } from './event-stores.service';
import { EventEntity } from './infrastructure/persistence/relational/entities/event.entity';

// CommandHandlers
import { PlanMaintenanceHandler } from './commands/handlers/plan-maintenance.handler';

// EventHandlers (basés sur eventType)
import { MaintenancePlannedHandler } from './events/handlers/maintenance-planned.handler';
import { MaintenancesModule } from 'src/maintenances/maintenances.module';

// On liste tous les CommandHandlers et EventHandlers
export const CommandHandlers = [PlanMaintenanceHandler];
export const EventHandlers = [MaintenancePlannedHandler];

@Module({
  imports: [
    CqrsModule,
    TypeOrmModule.forFeature([EventEntity]),
    MaintenancesModule,
  ],
  providers: [EventStoreService, ...CommandHandlers, ...EventHandlers],
  exports: [EventStoreService],
})
export class EventSourcingModule {}
