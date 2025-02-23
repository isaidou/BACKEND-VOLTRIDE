import { Repository } from 'typeorm';
import { ScooterModelEntityEntity } from '../entities/scooter-model-entity.entity';
import { NullableType } from '../../../../../utils/types/nullable.type';
import { ScooterModelEntity } from '../../../../domain/scooter-model-entity';
import { ScooterModelEntityRepository } from '../../scooter-model-entity.repository';
import { IPaginationOptions } from '../../../../../utils/types/pagination-options';
export declare class ScooterModelEntityRelationalRepository implements ScooterModelEntityRepository {
    private readonly scooterModelEntityRepository;
    constructor(scooterModelEntityRepository: Repository<ScooterModelEntityEntity>);
    create(data: ScooterModelEntity): Promise<ScooterModelEntity>;
    findAllWithPagination({ paginationOptions, }: {
        paginationOptions: IPaginationOptions;
    }): Promise<ScooterModelEntity[]>;
    findById(id: ScooterModelEntity['id']): Promise<NullableType<ScooterModelEntity>>;
    findByIds(ids: ScooterModelEntity['id'][]): Promise<ScooterModelEntity[]>;
    update(id: ScooterModelEntity['id'], payload: Partial<ScooterModelEntity>): Promise<ScooterModelEntity>;
    remove(id: ScooterModelEntity['id']): Promise<void>;
}
