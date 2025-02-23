import { Repository } from 'typeorm';
import { SupplierEntity } from '../entities/supplier.entity';
import { NullableType } from '../../../../../utils/types/nullable.type';
import { Supplier } from '../../../../domain/supplier';
import { SupplierRepository } from '../../supplier.repository';
import { IPaginationOptions } from '../../../../../utils/types/pagination-options';
export declare class SupplierRelationalRepository implements SupplierRepository {
    private readonly supplierRepository;
    constructor(supplierRepository: Repository<SupplierEntity>);
    create(data: Supplier): Promise<Supplier>;
    findAllWithPagination({ paginationOptions, }: {
        paginationOptions: IPaginationOptions;
    }): Promise<Supplier[]>;
    findById(id: Supplier['id']): Promise<NullableType<Supplier>>;
    findByIds(ids: Supplier['id'][]): Promise<Supplier[]>;
    update(id: Supplier['id'], payload: Partial<Supplier>): Promise<Supplier>;
    remove(id: Supplier['id']): Promise<void>;
}
