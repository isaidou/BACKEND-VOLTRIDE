import { ScootersService } from './scooters.service';
import { CreateScooterDto } from './dto/create-scooter.dto';
import { UpdateScooterDto } from './dto/update-scooter.dto';
import { InfinityPaginationResponseDto } from '../utils/dto/infinity-pagination-response.dto';
import { Scooter } from './domain/scooter';
export declare class ScootersController {
    private readonly scootersService;
    constructor(scootersService: ScootersService);
    create(createScooterDto: CreateScooterDto): Promise<Scooter>;
    findAll(page?: number, limit?: number): Promise<InfinityPaginationResponseDto<Scooter>>;
    findById(id: string): Promise<import("../utils/types/nullable.type").NullableType<Scooter>>;
    update(id: string, dto: UpdateScooterDto): Promise<Scooter | null>;
    remove(id: string): Promise<void>;
}
