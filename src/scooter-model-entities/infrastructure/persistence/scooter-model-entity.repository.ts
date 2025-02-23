import { DeepPartial } from '../../../utils/types/deep-partial.type';
import { NullableType } from '../../../utils/types/nullable.type';
import { IPaginationOptions } from '../../../utils/types/pagination-options';
import { ScooterModelEntity } from '../../domain/scooter-model-entity';

export abstract class ScooterModelEntityRepository {
  abstract create(
    data: Omit<ScooterModelEntity, 'id' | 'createdAt' | 'updatedAt'>,
  ): Promise<ScooterModelEntity>;

  abstract findAllWithPagination({
    paginationOptions,
  }: {
    paginationOptions: IPaginationOptions;
  }): Promise<ScooterModelEntity[]>;

  abstract findById(
    id: ScooterModelEntity['id'],
  ): Promise<NullableType<ScooterModelEntity>>;

  abstract findByIds(
    ids: ScooterModelEntity['id'][],
  ): Promise<ScooterModelEntity[]>;

  abstract update(
    id: ScooterModelEntity['id'],
    payload: DeepPartial<ScooterModelEntity>,
  ): Promise<ScooterModelEntity | null>;

  abstract remove(id: ScooterModelEntity['id']): Promise<void>;
}
