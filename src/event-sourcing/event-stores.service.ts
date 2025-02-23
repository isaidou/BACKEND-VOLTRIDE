import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EventEntity } from './infrastructure/persistence/relational/entities/event.entity';

@Injectable()
export class EventStoreService {
  constructor(
    @InjectRepository(EventEntity)
    private readonly eventRepository: Repository<EventEntity>,
  ) {}

  /**
   * Enregistre un nouvel événement dans l'EventStore.
   */
  async saveEvent(eventData: Omit<EventEntity, 'id'>): Promise<EventEntity> {
    const event = this.eventRepository.create(eventData);
    return await this.eventRepository.save(event);
  }

  /**
   * Récupère tous les événements d'un agrégat dans l'ordre de la version.
   */
  async getEventsForAggregate(aggregateId: string): Promise<EventEntity[]> {
    return await this.eventRepository.find({
      where: { aggregateId },
      order: { version: 'ASC' },
    });
  }

  /**
   * Marque un événement comme traité.
   */
  async markEventAsProcessed(id: string): Promise<void> {
    await this.eventRepository.update(id, { processed: true });
  }

  /**
   * Récupère les événements non traités (processed = false).
   */
  async getUnprocessedEvents(): Promise<EventEntity[]> {
    return await this.eventRepository.find({
      where: { processed: false },
      order: { version: 'ASC' },
    });
  }
}
