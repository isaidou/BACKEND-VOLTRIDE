import { Maintenance } from '../../../../domain/maintenance';
import { MaintenanceEntity } from '../entities/maintenance.entity';
export declare class MaintenanceMapper {
    static toDomain(raw: MaintenanceEntity): Maintenance;
    static toPersistence(domain: Maintenance): MaintenanceEntity;
}
