import { Repository } from 'typeorm';
import { IncidentEntity } from '../entities/incident.entity';
import { NullableType } from '../../../../../utils/types/nullable.type';
import { Incident } from '../../../../domain/incident';
import { IncidentRepository } from '../../incident.repository';
import { IPaginationOptions } from '../../../../../utils/types/pagination-options';
export declare class IncidentRelationalRepository implements IncidentRepository {
    private readonly incidentRepository;
    constructor(incidentRepository: Repository<IncidentEntity>);
    create(data: Incident): Promise<Incident>;
    findAllWithPagination({ paginationOptions, }: {
        paginationOptions: IPaginationOptions;
    }): Promise<Incident[]>;
    findById(id: Incident['id']): Promise<NullableType<Incident>>;
    findByIds(ids: Incident['id'][]): Promise<Incident[]>;
    update(id: Incident['id'], payload: Partial<Incident>): Promise<Incident>;
    remove(id: Incident['id']): Promise<void>;
}
