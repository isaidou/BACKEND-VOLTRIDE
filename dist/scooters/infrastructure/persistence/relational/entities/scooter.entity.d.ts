import { EntityRelationalHelper } from '../../../../../utils/relational-entity-helper';
export declare class ScooterEntity extends EntityRelationalHelper {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    serialNumber: string;
    status: string;
    totalMileage: number;
    totalChargeCycles: number;
    purchaseDate?: Date;
    warrantyEndDate?: Date;
    scooterModelId: string;
}
