import { ScooterModelEntitiesService } from './scooter-model-entities.service';
import { CreateScooterModelEntityDto } from './dto/create-scooter-model-entity.dto';
import { UpdateScooterModelEntityDto } from './dto/update-scooter-model-entity.dto';
import { ScooterModelEntity } from './domain/scooter-model-entity';
import { InfinityPaginationResponseDto } from '../utils/dto/infinity-pagination-response.dto';
import { FindAllScooterModelEntitiesDto } from './dto/find-all-scooter-model-entities.dto';
export declare class ScooterModelEntitiesController {
    private readonly scooterModelEntitiesService;
    constructor(scooterModelEntitiesService: ScooterModelEntitiesService);
    create(createScooterModelEntityDto: CreateScooterModelEntityDto): Promise<ScooterModelEntity>;
    findAll(query: FindAllScooterModelEntitiesDto): Promise<InfinityPaginationResponseDto<ScooterModelEntity>>;
    findById(id: string): Promise<import("../utils/types/nullable.type").NullableType<ScooterModelEntity>>;
    update(id: string, updateScooterModelEntityDto: UpdateScooterModelEntityDto): Promise<ScooterModelEntity | null>;
    remove(id: string): Promise<void>;
}
