import { Incident } from '../../../../domain/incident';
import { IncidentEntity } from '../entities/incident.entity';
export declare class IncidentMapper {
    static toDomain(raw: IncidentEntity): Incident;
    static toPersistence(domain: Incident): IncidentEntity;
}
