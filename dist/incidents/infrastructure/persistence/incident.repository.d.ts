import { DeepPartial } from '../../../utils/types/deep-partial.type';
import { NullableType } from '../../../utils/types/nullable.type';
import { IPaginationOptions } from '../../../utils/types/pagination-options';
import { Incident } from '../../domain/incident';
export declare abstract class IncidentRepository {
    abstract create(data: Omit<Incident, 'id' | 'createdAt' | 'updatedAt'>): Promise<Incident>;
    abstract findAllWithPagination({ paginationOptions, }: {
        paginationOptions: IPaginationOptions;
    }): Promise<Incident[]>;
    abstract findById(id: Incident['id']): Promise<NullableType<Incident>>;
    abstract findByIds(ids: Incident['id'][]): Promise<Incident[]>;
    abstract update(id: Incident['id'], payload: DeepPartial<Incident>): Promise<Incident | null>;
    abstract remove(id: Incident['id']): Promise<void>;
}
