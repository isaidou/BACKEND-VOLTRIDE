import { ScooterRepository } from './infrastructure/persistence/scooter.repository';
import { CreateScooterDto } from './dto/create-scooter.dto';
import { UpdateScooterDto } from './dto/update-scooter.dto';
import { IPaginationOptions } from '../utils/types/pagination-options';
import { Scooter } from './domain/scooter';
export declare class ScootersService {
    private readonly scooterRepo;
    constructor(scooterRepo: ScooterRepository);
    create(dto: CreateScooterDto): Promise<Scooter>;
    findAllWithPagination(paginationOptions: IPaginationOptions): Promise<Scooter[]>;
    findById(id: string): Promise<import("../utils/types/nullable.type").NullableType<Scooter>>;
    update(id: string, dto: UpdateScooterDto): Promise<Scooter | null>;
    remove(id: string): Promise<void>;
}
