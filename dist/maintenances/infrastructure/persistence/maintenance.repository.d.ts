import { NullableType } from '../../../utils/types/nullable.type';
import { IPaginationOptions } from '../../../utils/types/pagination-options';
import { Maintenance } from '../../domain/maintenance';
export declare abstract class MaintenanceRepository {
    abstract create(data: Omit<Maintenance, 'id' | 'createdAt' | 'updatedAt'>): Promise<Maintenance>;
    abstract findAllWithPagination(params: {
        paginationOptions: IPaginationOptions;
    }): Promise<Maintenance[]>;
    abstract findById(id: Maintenance['id']): Promise<NullableType<Maintenance>>;
    abstract update(id: Maintenance['id'], payload: Partial<Maintenance>): Promise<Maintenance | null>;
    abstract remove(id: Maintenance['id']): Promise<void>;
}
