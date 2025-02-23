import { Injectable } from '@nestjs/common';
import { PartRepository } from './infrastructure/persistence/part.repository';
import { CreatePartDto } from './dto/create-part.dto';
import { UpdatePartDto } from './dto/update-part.dto';
import { IPaginationOptions } from '../utils/types/pagination-options';
import { Part } from './domain/part';

@Injectable()
export class PartsService {
  constructor(private readonly partRepo: PartRepository) {}

  async create(dto: CreatePartDto): Promise<Part> {
    return this.partRepo.create({
      name: dto.name,
      description: dto.description,
      stockQuantity: dto.stockQuantity ?? 0,
      minStockThreshold: dto.minStockThreshold ?? 0,
      price: dto.price ?? 0,
    });
  }

  async findAllWithPagination(paginationOptions: IPaginationOptions) {
    return this.partRepo.findAllWithPagination({ paginationOptions });
  }

  async findById(id: string) {
    return this.partRepo.findById(id);
  }

  async update(id: string, dto: UpdatePartDto) {
    return this.partRepo.update(id, {
      name: dto.name,
      description: dto.description,
      stockQuantity: dto.stockQuantity,
      minStockThreshold: dto.minStockThreshold,
      price: dto.price,
    });
  }

  async remove(id: string) {
    return this.partRepo.remove(id);
  }
}
