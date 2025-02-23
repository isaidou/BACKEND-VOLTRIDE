import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PartRepository } from '../../part.repository';
import { PartMapper } from '../mappers/part.mapper';
import { PartEntity } from '../entities/part.entity';
import { Part } from '../../../../domain/part';
import { IPaginationOptions } from '../../../../../utils/types/pagination-options';
import { NullableType } from '../../../../../utils/types/nullable.type';

@Injectable()
export class PartRelationalRepository implements PartRepository {
  constructor(
    @InjectRepository(PartEntity)
    private readonly repo: Repository<PartEntity>,
  ) {}

  async create(
    data: Omit<Part, 'id' | 'lastEventTimestamp' | 'createdAt' | 'updatedAt'>,
  ): Promise<Part> {
    const entity = PartMapper.toPersistence(data as Part);
    const newEntity = await this.repo.save(this.repo.create(entity));
    return PartMapper.toDomain(newEntity);
  }

  async findAllWithPagination({
    paginationOptions,
  }: {
    paginationOptions: IPaginationOptions;
  }): Promise<Part[]> {
    const { page, limit } = paginationOptions;
    const entities = await this.repo.find({
      skip: (page - 1) * limit,
      take: limit,
      order: { lastEventTimestamp: 'DESC' },
    });
    return entities.map(PartMapper.toDomain);
  }

  async findById(id: string): Promise<NullableType<Part>> {
    const entity = await this.repo.findOne({ where: { id } });
    return entity ? PartMapper.toDomain(entity) : null;
  }

  async update(id: string, payload: Partial<Part>): Promise<Part | null> {
    const existing = await this.repo.findOne({ where: { id } });
    if (!existing) return null;
    const merged = this.repo.merge(
      existing,
      PartMapper.toPersistence({
        ...PartMapper.toDomain(existing),
        ...payload,
      }),
    );
    const updated = await this.repo.save(merged);
    return PartMapper.toDomain(updated);
  }

  async remove(id: string): Promise<void> {
    await this.repo.delete(id);
  }
}
