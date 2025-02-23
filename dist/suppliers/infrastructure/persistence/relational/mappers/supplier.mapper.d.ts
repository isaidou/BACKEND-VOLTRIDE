import { Supplier } from '../../../../domain/supplier';
import { SupplierEntity } from '../entities/supplier.entity';
export declare class SupplierMapper {
    static toDomain(raw: SupplierEntity): Supplier;
    static toPersistence(domain: Supplier): SupplierEntity;
}
