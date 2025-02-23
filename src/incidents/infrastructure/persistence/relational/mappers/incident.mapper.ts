import { Incident } from '../../../../domain/incident';
import { IncidentEntity } from '../entities/incident.entity';

export class IncidentMapper {
  static toDomain(raw: IncidentEntity): Incident {
    const domain = new Incident();
    domain.id = raw.id;
    domain.createdAt = raw.createdAt;
    domain.updatedAt = raw.updatedAt;
    domain.scooterId = raw.scooterId;
    domain.reportedById = raw.reportedById;
    domain.dateReported = raw.dateReported;
    domain.description = raw.description;
    domain.status = raw.status;
    domain.impact_on_operation = raw.impact_on_operation;
    domain.resolutionNotes = raw.resolutionNotes;
    return domain;
  }

  static toPersistence(domain: Incident): IncidentEntity {
    const entity = new IncidentEntity();
    if (domain.id) entity.id = domain.id;
    entity.createdAt = domain.createdAt;
    entity.updatedAt = domain.updatedAt;
    entity.scooterId = domain.scooterId;
    entity.reportedById = domain.reportedById;
    entity.dateReported = domain.dateReported;
    entity.description = domain.description;
    entity.status = domain.status;
    entity.impact_on_operation = domain.impact_on_operation;
    entity.resolutionNotes = domain.resolutionNotes;
    return entity;
  }
}
