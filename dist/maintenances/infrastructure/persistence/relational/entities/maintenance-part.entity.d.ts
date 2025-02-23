import { MaintenanceEntity } from './maintenance.entity';
import { PartEntity } from '../../../../../parts/infrastructure/persistence/relational/entities/part.entity';
export declare class MaintenancePartEntity {
    maintenanceId: string;
    partId: string;
    maintenance: MaintenanceEntity;
    part: PartEntity;
    quantityUsed: number;
    cost: number;
}
