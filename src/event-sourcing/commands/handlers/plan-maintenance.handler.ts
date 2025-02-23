import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { PlanMaintenanceCommand } from '../impl/plan-maintenance.command';
import { EventStoreService } from '../../event-stores.service';

@CommandHandler(PlanMaintenanceCommand)
export class PlanMaintenanceHandler
  implements ICommandHandler<PlanMaintenanceCommand>
{
  constructor(private readonly eventStoreService: EventStoreService) {}

  async execute(command: PlanMaintenanceCommand): Promise<void> {
    const { scooterId, maintenanceDate, type, cost, performedById } = command;

    // Récupération du dernier événement pour connaître la version
    const existingEvents =
      await this.eventStoreService.getEventsForAggregate(scooterId);
    const lastVersion =
      existingEvents.length > 0
        ? existingEvents[existingEvents.length - 1].version
        : 0;

    // Création d'un nouvel événement
    await this.eventStoreService.saveEvent({
      aggregateId: scooterId,
      aggregateType: 'Scooter',
      eventType: 'MaintenancePlanned',
      eventPayload: {
        maintenanceDate,
        type,
        cost,
        performedById,
      },
      eventTimestamp: new Date(),
      version: lastVersion + 1,
      processed: false, // à false par défaut (non traité dans la projection)
    });
  }
}
