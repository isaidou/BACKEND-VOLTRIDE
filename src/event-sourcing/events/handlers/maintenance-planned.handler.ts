import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { Logger } from '@nestjs/common';
import { EventStoreService } from '../../event-stores.service';
import { MaintenancesService } from '../../../maintenances/maintenances.service';
import { EventEntity } from '../../infrastructure/persistence/relational/entities/event.entity';
import { MaintenancePlannedEvent } from '../impl/maintenance-planned.event';

/**
 * Exemple d'EventHandler pour l'événement MaintenancePlanned.
 *
 * Ici on traite l'événement depuis l'EventStore (processed = false).
 */
@EventsHandler(MaintenancePlannedEvent) // on utilise un pattern custom (voir ci-dessous)
export class MaintenancePlannedHandler implements IEventHandler<EventEntity> {
  private readonly logger = new Logger(MaintenancePlannedHandler.name);

  constructor(
    private readonly eventStoreService: EventStoreService,
    private readonly maintenancesService: MaintenancesService,
  ) {}

  async handle(event: EventEntity) {
    if (event.eventType !== 'MaintenancePlanned') {
      return;
    }

    // On vérifie si déjà traité
    if (event.processed) {
      this.logger.log(`Événement déjà traité : ${event.id}`);
      return;
    }

    this.logger.log(
      `Traitement de l'événement MaintenancePlanned pour l'agrégat ${event.aggregateId}`,
    );

    const payload = event.eventPayload; // { maintenanceDate, type, cost, performedById }

    // On crée une entrée "Maintenance" dans la projection
    await this.maintenancesService.create({
      type: payload.type,
      maintenanceDate: payload.maintenanceDate,
      cost: payload.cost,
      notes: `Généré depuis l'événement: ${event.id}`,
      scooterId: event.aggregateId,
      performedById: payload.performedById,
      // etc.
    });

    // On marque l'événement comme traité
    await this.eventStoreService.markEventAsProcessed(event.id);
  }
}
