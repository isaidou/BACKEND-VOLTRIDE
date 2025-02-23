import { Injectable } from '@nestjs/common';
import { CreateIncidentDto } from './dto/create-incident.dto';
import { UpdateIncidentDto } from './dto/update-incident.dto';
import { IncidentRepository } from './infrastructure/persistence/incident.repository';
import { IPaginationOptions } from '../utils/types/pagination-options';
import { Incident } from './domain/incident';

@Injectable()
export class IncidentsService {
  constructor(
    // Dependencies here
    private readonly incidentRepository: IncidentRepository,
  ) {}

  async create(dto: CreateIncidentDto): Promise<Incident> {
    return this.incidentRepository.create({
      scooterId: dto.scooterId,
      description: dto.description,
      reportedById: dto.reportedById,
      dateReported: new Date(),
      status: 'open',
      impact_on_operation: true,
    });
  }

  findAllWithPagination({
    paginationOptions,
  }: {
    paginationOptions: IPaginationOptions;
  }) {
    return this.incidentRepository.findAllWithPagination({
      paginationOptions: {
        page: paginationOptions.page,
        limit: paginationOptions.limit,
      },
    });
  }

  findById(id: Incident['id']) {
    return this.incidentRepository.findById(id);
  }

  findByIds(ids: Incident['id'][]) {
    return this.incidentRepository.findByIds(ids);
  }

  async update(id: string, dto: UpdateIncidentDto) {
    return this.incidentRepository.update(id, {
      scooterId: dto.scooterId,
      description: dto.description,
      reportedById: dto.reportedById,
      status: dto.status,
      resolutionNotes: dto.resolutionNotes,
    });
  }

  remove(id: Incident['id']) {
    return this.incidentRepository.remove(id);
  }
}
