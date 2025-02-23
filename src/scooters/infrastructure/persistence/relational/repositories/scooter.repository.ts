import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ScooterEntity } from '../entities/scooter.entity';
import { NullableType } from '../../../../../utils/types/nullable.type';
import { Scooter } from '../../../../domain/scooter';
import { ScooterRepository } from '../../scooter.repository';
import { ScooterMapper } from '../mappers/scooter.mapper';
import { IPaginationOptions } from '../../../../../utils/types/pagination-options';

@Injectable()
export class ScooterRelationalRepository implements ScooterRepository {
  constructor(
    @InjectRepository(ScooterEntity)
    private readonly repo: Repository<ScooterEntity>,
  ) {}

  async create(
    data: Omit<Scooter, 'id' | 'createdAt' | 'updatedAt'>,
  ): Promise<Scooter> {
    const entity = ScooterMapper.toPersistence(data as Scooter);
    const newEntity = await this.repo.save(this.repo.create(entity));
    return ScooterMapper.toDomain(newEntity);
  }

  async findAllWithPagination({
    paginationOptions,
  }: {
    paginationOptions: IPaginationOptions;
  }): Promise<Scooter[]> {
    const { page, limit } = paginationOptions;
    const entities = await this.repo.find({
      skip: (page - 1) * limit,
      take: limit,
      order: { createdAt: 'DESC' },
    });
    return entities.map(ScooterMapper.toDomain);
  }

  async findById(id: string): Promise<NullableType<Scooter>> {
    const entity = await this.repo.findOne({ where: { id } });
    return entity ? ScooterMapper.toDomain(entity) : null;
  }

  async update(id: string, payload: Partial<Scooter>): Promise<Scooter | null> {
    const existing = await this.repo.findOne({ where: { id } });
    if (!existing) return null;

    const merged = this.repo.merge(
      existing,
      ScooterMapper.toPersistence({
        ...ScooterMapper.toDomain(existing),
        ...payload,
      }),
    );

    const updated = await this.repo.save(merged);
    return ScooterMapper.toDomain(updated);
  }

  async remove(id: string): Promise<void> {
    await this.repo.delete(id);
  }
}
