import { Injectable } from '@nestjs/common';
import { CreateSupplierDto } from './dto/create-supplier.dto';
import { UpdateSupplierDto } from './dto/update-supplier.dto';
import { SupplierRepository } from './infrastructure/persistence/supplier.repository';
import { IPaginationOptions } from '../utils/types/pagination-options';
import { Supplier } from './domain/supplier';

@Injectable()
export class SuppliersService {
  constructor(
    // Dependencies here
    private readonly supplierRepository: SupplierRepository,
  ) {}

  async create(dto: CreateSupplierDto): Promise<Supplier> {
    return this.supplierRepository.create({
      name: dto.name,
      contactPerson: dto.contactPerson,
      phoneNumber: dto.phoneNumber,
      address: dto.address,
    });
  }

  findAllWithPagination({
    paginationOptions,
  }: {
    paginationOptions: IPaginationOptions;
  }) {
    return this.supplierRepository.findAllWithPagination({
      paginationOptions: {
        page: paginationOptions.page,
        limit: paginationOptions.limit,
      },
    });
  }

  findById(id: Supplier['id']) {
    return this.supplierRepository.findById(id);
  }

  findByIds(ids: Supplier['id'][]) {
    return this.supplierRepository.findByIds(ids);
  }

  async update(id: string, dto: UpdateSupplierDto) {
    return this.supplierRepository.update(id, {
      name: dto.name,
      contactPerson: dto.contactPerson,
      phoneNumber: dto.phoneNumber,
      address: dto.address,
    });
  }

  remove(id: Supplier['id']) {
    return this.supplierRepository.remove(id);
  }
}
