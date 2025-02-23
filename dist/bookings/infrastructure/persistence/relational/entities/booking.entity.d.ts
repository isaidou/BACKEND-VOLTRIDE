import { EntityRelationalHelper } from '../../../../../utils/relational-entity-helper';
export declare class BookingEntity extends EntityRelationalHelper {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    userId: string;
    scooterId: string;
    startDatetime: Date;
    endDatetime?: Date;
    location?: string;
    status: string;
    notes?: string;
}
