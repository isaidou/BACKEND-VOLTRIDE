import { EntityRelationalHelper } from '../../../../../utils/relational-entity-helper';
export declare class ScooterModelEntityEntity extends EntityRelationalHelper {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    brand?: string;
    maintenanceIntervalKm?: number;
    maintenanceIntervalMonths?: number;
    description?: string;
}
