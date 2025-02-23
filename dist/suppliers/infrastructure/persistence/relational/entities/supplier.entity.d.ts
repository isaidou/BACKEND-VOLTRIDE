import { EntityRelationalHelper } from '../../../../../utils/relational-entity-helper';
export declare class SupplierEntity extends EntityRelationalHelper {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    contactPerson?: string;
    phoneNumber?: string;
    address?: string;
}
