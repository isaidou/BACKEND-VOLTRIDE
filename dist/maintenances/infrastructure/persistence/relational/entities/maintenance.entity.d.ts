import { EntityRelationalHelper } from '../../../../../utils/relational-entity-helper';
import { MaintenancePartEntity } from './maintenance-part.entity';
export declare class MaintenanceEntity extends EntityRelationalHelper {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    type: string;
    maintenanceDate?: Date;
    cost: number;
    notes?: string;
    scooterId: string;
    performedById?: string;
    currentMileage?: number;
    currentChargeCycles?: number;
    partsUsed: MaintenancePartEntity[];
}
