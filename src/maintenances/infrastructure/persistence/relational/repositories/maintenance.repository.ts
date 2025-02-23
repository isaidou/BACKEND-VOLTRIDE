import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MaintenanceRepository } from '../../maintenance.repository';
import { MaintenanceMapper } from '../mappers/maintenance.mapper';
import { MaintenanceEntity } from '../entities/maintenance.entity';
import { Maintenance } from '../../../../domain/maintenance';
import { IPaginationOptions } from '../../../../../utils/types/pagination-options';
import { NullableType } from '../../../../../utils/types/nullable.type';

@Injectable()
export class MaintenanceRelationalRepository implements MaintenanceRepository {
  constructor(
    @InjectRepository(MaintenanceEntity)
    private readonly repo: Repository<MaintenanceEntity>,
  ) {}

  async create(
    data: Omit<Maintenance, 'id' | 'createdAt' | 'updatedAt'>,
  ): Promise<Maintenance> {
    const entity = MaintenanceMapper.toPersistence(data as Maintenance);
    const newEntity = await this.repo.save(this.repo.create(entity));
    return MaintenanceMapper.toDomain(newEntity);
  }

  async findAllWithPagination({
    paginationOptions,
  }: {
    paginationOptions: IPaginationOptions;
  }): Promise<Maintenance[]> {
    const { page, limit } = paginationOptions;
    const entities = await this.repo.find({
      skip: (page - 1) * limit,
      take: limit,
      order: { createdAt: 'DESC' },
    });
    return entities.map(MaintenanceMapper.toDomain);
  }

  async findById(id: string): Promise<NullableType<Maintenance>> {
    const entity = await this.repo.findOne({ where: { id } });
    return entity ? MaintenanceMapper.toDomain(entity) : null;
  }

  async update(
    id: string,
    payload: Partial<Maintenance>,
  ): Promise<Maintenance | null> {
    const existing = await this.repo.findOne({ where: { id } });
    if (!existing) return null;

    const merged = this.repo.merge(
      existing,
      MaintenanceMapper.toPersistence({
        ...MaintenanceMapper.toDomain(existing),
        ...payload,
      }),
    );
    const updated = await this.repo.save(merged);
    return MaintenanceMapper.toDomain(updated);
  }

  async remove(id: string): Promise<void> {
    await this.repo.delete(id);
  }
}
