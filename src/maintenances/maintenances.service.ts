import { Injectable } from '@nestjs/common';
import { MaintenanceRepository } from './infrastructure/persistence/maintenance.repository';
import { CreateMaintenanceDto } from './dto/create-maintenance.dto';
import { UpdateMaintenanceDto } from './dto/update-maintenance.dto';
import { IPaginationOptions } from '../utils/types/pagination-options';
import { Maintenance } from './domain/maintenance';

@Injectable()
export class MaintenancesService {
  constructor(private readonly maintenanceRepo: MaintenanceRepository) {}

  async create(dto: CreateMaintenanceDto): Promise<Maintenance> {
    return this.maintenanceRepo.create({
      type: dto.type,
      maintenanceDate: dto.maintenanceDate
        ? new Date(dto.maintenanceDate)
        : undefined,
      cost: dto.cost,
      notes: dto.notes,
      scooterId: dto.scooterId,
      performedById: dto.performedById,
      currentMileage: dto.currentMileage,
      currentChargeCycles: dto.currentChargeCycles,
    });
  }

  async findAllWithPagination(paginationOptions: IPaginationOptions) {
    return this.maintenanceRepo.findAllWithPagination({ paginationOptions });
  }

  async findById(id: string) {
    return this.maintenanceRepo.findById(id);
  }

  async update(id: string, dto: UpdateMaintenanceDto) {
    return this.maintenanceRepo.update(id, {
      type: dto.type,
      maintenanceDate: dto.maintenanceDate
        ? new Date(dto.maintenanceDate)
        : undefined,
      cost: dto.cost,
      notes: dto.notes,
      scooterId: dto.scooterId,
      performedById: dto.performedById,
      currentMileage: dto.currentMileage,
      currentChargeCycles: dto.currentChargeCycles,
    });
  }

  async remove(id: string) {
    return this.maintenanceRepo.remove(id);
  }
}
