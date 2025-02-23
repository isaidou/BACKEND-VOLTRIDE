import { CreateSupplierDto } from './dto/create-supplier.dto';
import { UpdateSupplierDto } from './dto/update-supplier.dto';
import { SupplierRepository } from './infrastructure/persistence/supplier.repository';
import { IPaginationOptions } from '../utils/types/pagination-options';
import { Supplier } from './domain/supplier';
export declare class SuppliersService {
    private readonly supplierRepository;
    constructor(supplierRepository: SupplierRepository);
    create(dto: CreateSupplierDto): Promise<Supplier>;
    findAllWithPagination({ paginationOptions, }: {
        paginationOptions: IPaginationOptions;
    }): Promise<Supplier[]>;
    findById(id: Supplier['id']): Promise<import("../utils/types/nullable.type").NullableType<Supplier>>;
    findByIds(ids: Supplier['id'][]): Promise<Supplier[]>;
    update(id: string, dto: UpdateSupplierDto): Promise<Supplier | null>;
    remove(id: Supplier['id']): Promise<void>;
}
