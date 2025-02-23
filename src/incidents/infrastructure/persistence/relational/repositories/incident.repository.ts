import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, In } from 'typeorm';
import { IncidentEntity } from '../entities/incident.entity';
import { NullableType } from '../../../../../utils/types/nullable.type';
import { Incident } from '../../../../domain/incident';
import { IncidentRepository } from '../../incident.repository';
import { IncidentMapper } from '../mappers/incident.mapper';
import { IPaginationOptions } from '../../../../../utils/types/pagination-options';

@Injectable()
export class IncidentRelationalRepository implements IncidentRepository {
  constructor(
    @InjectRepository(IncidentEntity)
    private readonly incidentRepository: Repository<IncidentEntity>,
  ) {}

  async create(data: Incident): Promise<Incident> {
    const persistenceModel = IncidentMapper.toPersistence(data);
    const newEntity = await this.incidentRepository.save(
      this.incidentRepository.create(persistenceModel),
    );
    return IncidentMapper.toDomain(newEntity);
  }

  async findAllWithPagination({
    paginationOptions,
  }: {
    paginationOptions: IPaginationOptions;
  }): Promise<Incident[]> {
    const entities = await this.incidentRepository.find({
      skip: (paginationOptions.page - 1) * paginationOptions.limit,
      take: paginationOptions.limit,
    });

    return entities.map((entity) => IncidentMapper.toDomain(entity));
  }

  async findById(id: Incident['id']): Promise<NullableType<Incident>> {
    const entity = await this.incidentRepository.findOne({
      where: { id },
    });

    return entity ? IncidentMapper.toDomain(entity) : null;
  }

  async findByIds(ids: Incident['id'][]): Promise<Incident[]> {
    const entities = await this.incidentRepository.find({
      where: { id: In(ids) },
    });

    return entities.map((entity) => IncidentMapper.toDomain(entity));
  }

  async update(
    id: Incident['id'],
    payload: Partial<Incident>,
  ): Promise<Incident> {
    const entity = await this.incidentRepository.findOne({
      where: { id },
    });

    if (!entity) {
      throw new Error('Record not found');
    }

    const updatedEntity = await this.incidentRepository.save(
      this.incidentRepository.create(
        IncidentMapper.toPersistence({
          ...IncidentMapper.toDomain(entity),
          ...payload,
        }),
      ),
    );

    return IncidentMapper.toDomain(updatedEntity);
  }

  async remove(id: Incident['id']): Promise<void> {
    await this.incidentRepository.delete(id);
  }
}
