import { SuppliersService } from './suppliers.service';
import { CreateSupplierDto } from './dto/create-supplier.dto';
import { UpdateSupplierDto } from './dto/update-supplier.dto';
import { Supplier } from './domain/supplier';
import { InfinityPaginationResponseDto } from '../utils/dto/infinity-pagination-response.dto';
import { FindAllSuppliersDto } from './dto/find-all-suppliers.dto';
export declare class SuppliersController {
    private readonly suppliersService;
    constructor(suppliersService: SuppliersService);
    create(createSupplierDto: CreateSupplierDto): Promise<Supplier>;
    findAll(query: FindAllSuppliersDto): Promise<InfinityPaginationResponseDto<Supplier>>;
    findById(id: string): Promise<import("../utils/types/nullable.type").NullableType<Supplier>>;
    update(id: string, updateSupplierDto: UpdateSupplierDto): Promise<Supplier | null>;
    remove(id: string): Promise<void>;
}
