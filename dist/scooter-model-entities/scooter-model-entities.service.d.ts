import { CreateScooterModelEntityDto } from './dto/create-scooter-model-entity.dto';
import { UpdateScooterModelEntityDto } from './dto/update-scooter-model-entity.dto';
import { ScooterModelEntityRepository } from './infrastructure/persistence/scooter-model-entity.repository';
import { IPaginationOptions } from '../utils/types/pagination-options';
import { ScooterModelEntity } from './domain/scooter-model-entity';
export declare class ScooterModelEntitiesService {
    private readonly scooterModelEntityRepository;
    constructor(scooterModelEntityRepository: ScooterModelEntityRepository);
    create(createScooterModelEntityDto: CreateScooterModelEntityDto): Promise<ScooterModelEntity>;
    findAllWithPagination({ paginationOptions, }: {
        paginationOptions: IPaginationOptions;
    }): Promise<ScooterModelEntity[]>;
    findById(id: ScooterModelEntity['id']): Promise<import("../utils/types/nullable.type").NullableType<ScooterModelEntity>>;
    findByIds(ids: ScooterModelEntity['id'][]): Promise<ScooterModelEntity[]>;
    update(id: ScooterModelEntity['id'], updateScooterModelEntityDto: UpdateScooterModelEntityDto): Promise<ScooterModelEntity | null>;
    remove(id: ScooterModelEntity['id']): Promise<void>;
}
