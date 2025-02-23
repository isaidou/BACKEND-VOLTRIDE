import { Injectable } from '@nestjs/common';
import { CreateScooterModelEntityDto } from './dto/create-scooter-model-entity.dto';
import { UpdateScooterModelEntityDto } from './dto/update-scooter-model-entity.dto';
import { ScooterModelEntityRepository } from './infrastructure/persistence/scooter-model-entity.repository';
import { IPaginationOptions } from '../utils/types/pagination-options';
import { ScooterModelEntity } from './domain/scooter-model-entity';

@Injectable()
export class ScooterModelEntitiesService {
  constructor(
    private readonly scooterModelEntityRepository: ScooterModelEntityRepository,
  ) {}

  async create(createScooterModelEntityDto: CreateScooterModelEntityDto) {
    // <creating-property />
    // Exemples de transformations ou d’initialisations supplémentaires :
    const {
      name,
      brand,
      maintenanceIntervalKm,
      maintenanceIntervalMonths,
      description,
    } = createScooterModelEntityDto;

    return this.scooterModelEntityRepository.create({
      // <creating-property-payload />
      name,
      brand,
      maintenanceIntervalKm,
      maintenanceIntervalMonths,
      description,
    });
  }

  findAllWithPagination({
    paginationOptions,
  }: {
    paginationOptions: IPaginationOptions;
  }) {
    return this.scooterModelEntityRepository.findAllWithPagination({
      paginationOptions: {
        page: paginationOptions.page,
        limit: paginationOptions.limit,
      },
    });
  }

  findById(id: ScooterModelEntity['id']) {
    return this.scooterModelEntityRepository.findById(id);
  }

  findByIds(ids: ScooterModelEntity['id'][]) {
    return this.scooterModelEntityRepository.findByIds(ids);
  }

  async update(
    id: ScooterModelEntity['id'],
    updateScooterModelEntityDto: UpdateScooterModelEntityDto,
  ) {
    // <updating-property />
    const {
      name,
      brand,
      maintenanceIntervalKm,
      maintenanceIntervalMonths,
      description,
    } = updateScooterModelEntityDto;

    return this.scooterModelEntityRepository.update(id, {
      // <updating-property-payload />
      name,
      brand,
      maintenanceIntervalKm,
      maintenanceIntervalMonths,
      description,
    });
  }

  remove(id: ScooterModelEntity['id']) {
    return this.scooterModelEntityRepository.remove(id);
  }
}
