import { NullableType } from '../../../utils/types/nullable.type';
import { IPaginationOptions } from '../../../utils/types/pagination-options';
import { Scooter } from '../../domain/scooter';
export declare abstract class ScooterRepository {
    abstract create(data: Omit<Scooter, 'id' | 'createdAt' | 'updatedAt'>): Promise<Scooter>;
    abstract findAllWithPagination(params: {
        paginationOptions: IPaginationOptions;
    }): Promise<Scooter[]>;
    abstract findById(id: Scooter['id']): Promise<NullableType<Scooter>>;
    abstract update(id: Scooter['id'], payload: Partial<Scooter>): Promise<Scooter | null>;
    abstract remove(id: Scooter['id']): Promise<void>;
}
