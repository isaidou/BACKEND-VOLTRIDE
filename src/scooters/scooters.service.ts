import { Injectable } from '@nestjs/common';
import { ScooterRepository } from './infrastructure/persistence/scooter.repository';
import { CreateScooterDto } from './dto/create-scooter.dto';
import { UpdateScooterDto } from './dto/update-scooter.dto';
import { IPaginationOptions } from '../utils/types/pagination-options';
import { Scooter } from './domain/scooter';

@Injectable()
export class ScootersService {
  constructor(private readonly scooterRepo: ScooterRepository) {}

  async create(dto: CreateScooterDto): Promise<Scooter> {
    return this.scooterRepo.create({
      serialNumber: dto.serialNumber,
      status: dto.status ?? 'available',
      totalMileage: dto.totalMileage ?? 0,
      totalChargeCycles: dto.totalChargeCycles ?? 0,
      purchaseDate: dto.purchaseDate ? new Date(dto.purchaseDate) : undefined,
      warrantyEndDate: dto.warrantyEndDate
        ? new Date(dto.warrantyEndDate)
        : undefined,
      scooterModelId: dto.scooterModelId,
    });
  }

  async findAllWithPagination(paginationOptions: IPaginationOptions) {
    return this.scooterRepo.findAllWithPagination({ paginationOptions });
  }

  async findById(id: string) {
    return this.scooterRepo.findById(id);
  }

  async update(id: string, dto: UpdateScooterDto) {
    return this.scooterRepo.update(id, {
      serialNumber: dto.serialNumber,
      status: dto.status,
      totalMileage: dto.totalMileage,
      totalChargeCycles: dto.totalChargeCycles,
      purchaseDate: dto.purchaseDate ? new Date(dto.purchaseDate) : undefined,
      warrantyEndDate: dto.warrantyEndDate
        ? new Date(dto.warrantyEndDate)
        : undefined,
      scooterModelId: dto.scooterModelId,
    });
  }

  async remove(id: string) {
    return this.scooterRepo.remove(id);
  }
}
