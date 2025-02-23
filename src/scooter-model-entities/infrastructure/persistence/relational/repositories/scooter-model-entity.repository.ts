import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, In } from 'typeorm';
import { ScooterModelEntityEntity } from '../entities/scooter-model-entity.entity';
import { NullableType } from '../../../../../utils/types/nullable.type';
import { ScooterModelEntity } from '../../../../domain/scooter-model-entity';
import { ScooterModelEntityRepository } from '../../scooter-model-entity.repository';
import { ScooterModelEntityMapper } from '../mappers/scooter-model-entity.mapper';
import { IPaginationOptions } from '../../../../../utils/types/pagination-options';

@Injectable()
export class ScooterModelEntityRelationalRepository
  implements ScooterModelEntityRepository
{
  constructor(
    @InjectRepository(ScooterModelEntityEntity)
    private readonly scooterModelEntityRepository: Repository<ScooterModelEntityEntity>,
  ) {}

  async create(data: ScooterModelEntity): Promise<ScooterModelEntity> {
    const persistenceModel = ScooterModelEntityMapper.toPersistence(data);
    const newEntity = await this.scooterModelEntityRepository.save(
      this.scooterModelEntityRepository.create(persistenceModel),
    );
    return ScooterModelEntityMapper.toDomain(newEntity);
  }

  async findAllWithPagination({
    paginationOptions,
  }: {
    paginationOptions: IPaginationOptions;
  }): Promise<ScooterModelEntity[]> {
    const entities = await this.scooterModelEntityRepository.find({
      skip: (paginationOptions.page - 1) * paginationOptions.limit,
      take: paginationOptions.limit,
    });

    return entities.map((entity) => ScooterModelEntityMapper.toDomain(entity));
  }

  async findById(
    id: ScooterModelEntity['id'],
  ): Promise<NullableType<ScooterModelEntity>> {
    const entity = await this.scooterModelEntityRepository.findOne({
      where: { id },
    });

    return entity ? ScooterModelEntityMapper.toDomain(entity) : null;
  }

  async findByIds(
    ids: ScooterModelEntity['id'][],
  ): Promise<ScooterModelEntity[]> {
    const entities = await this.scooterModelEntityRepository.find({
      where: { id: In(ids) },
    });

    return entities.map((entity) => ScooterModelEntityMapper.toDomain(entity));
  }

  async update(
    id: ScooterModelEntity['id'],
    payload: Partial<ScooterModelEntity>,
  ): Promise<ScooterModelEntity> {
    const entity = await this.scooterModelEntityRepository.findOne({
      where: { id },
    });

    if (!entity) {
      throw new Error('Record not found');
    }

    const updatedEntity = await this.scooterModelEntityRepository.save(
      this.scooterModelEntityRepository.create(
        ScooterModelEntityMapper.toPersistence({
          ...ScooterModelEntityMapper.toDomain(entity),
          ...payload,
        }),
      ),
    );

    return ScooterModelEntityMapper.toDomain(updatedEntity);
  }

  async remove(id: ScooterModelEntity['id']): Promise<void> {
    await this.scooterModelEntityRepository.delete(id);
  }
}
