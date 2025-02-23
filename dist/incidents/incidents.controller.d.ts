import { IncidentsService } from './incidents.service';
import { CreateIncidentDto } from './dto/create-incident.dto';
import { UpdateIncidentDto } from './dto/update-incident.dto';
import { Incident } from './domain/incident';
import { InfinityPaginationResponseDto } from '../utils/dto/infinity-pagination-response.dto';
import { FindAllIncidentsDto } from './dto/find-all-incidents.dto';
export declare class IncidentsController {
    private readonly incidentsService;
    constructor(incidentsService: IncidentsService);
    create(createIncidentDto: CreateIncidentDto): Promise<Incident>;
    findAll(query: FindAllIncidentsDto): Promise<InfinityPaginationResponseDto<Incident>>;
    findById(id: string): Promise<import("../utils/types/nullable.type").NullableType<Incident>>;
    update(id: string, updateIncidentDto: UpdateIncidentDto): Promise<Incident | null>;
    remove(id: string): Promise<void>;
}
