import { CreateIncidentDto } from './dto/create-incident.dto';
import { UpdateIncidentDto } from './dto/update-incident.dto';
import { IncidentRepository } from './infrastructure/persistence/incident.repository';
import { IPaginationOptions } from '../utils/types/pagination-options';
import { Incident } from './domain/incident';
export declare class IncidentsService {
    private readonly incidentRepository;
    constructor(incidentRepository: IncidentRepository);
    create(dto: CreateIncidentDto): Promise<Incident>;
    findAllWithPagination({ paginationOptions, }: {
        paginationOptions: IPaginationOptions;
    }): Promise<Incident[]>;
    findById(id: Incident['id']): Promise<import("../utils/types/nullable.type").NullableType<Incident>>;
    findByIds(ids: Incident['id'][]): Promise<Incident[]>;
    update(id: string, dto: UpdateIncidentDto): Promise<Incident | null>;
    remove(id: Incident['id']): Promise<void>;
}
