import { EntityRelationalHelper } from '../../../../../utils/relational-entity-helper';
export declare class PartEntity extends EntityRelationalHelper {
    id: string;
    name: string;
    description?: string;
    stockQuantity: number;
    minStockThreshold: number;
    price: number;
    lastEventTimestamp?: Date;
    createdAt: Date;
    updatedAt: Date;
}
