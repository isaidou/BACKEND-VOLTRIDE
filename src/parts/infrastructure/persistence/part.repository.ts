import { IPaginationOptions } from '../../../utils/types/pagination-options';
import { NullableType } from '../../../utils/types/nullable.type';
import { Part } from '../../domain/part';

export abstract class PartRepository {
  abstract create(
    data: Omit<Part, 'id' | 'lastEventTimestamp' | 'createdAt' | 'updatedAt'>,
  ): Promise<Part>;

  abstract findAllWithPagination(params: {
    paginationOptions: IPaginationOptions;
  }): Promise<Part[]>;

  abstract findById(id: Part['id']): Promise<NullableType<Part>>;

  abstract update(id: Part['id'], payload: Partial<Part>): Promise<Part | null>;

  abstract remove(id: Part['id']): Promise<void>;
}
