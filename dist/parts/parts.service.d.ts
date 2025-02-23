import { PartRepository } from './infrastructure/persistence/part.repository';
import { CreatePartDto } from './dto/create-part.dto';
import { UpdatePartDto } from './dto/update-part.dto';
import { IPaginationOptions } from '../utils/types/pagination-options';
import { Part } from './domain/part';
export declare class PartsService {
    private readonly partRepo;
    constructor(partRepo: PartRepository);
    create(dto: CreatePartDto): Promise<Part>;
    findAllWithPagination(paginationOptions: IPaginationOptions): Promise<Part[]>;
    findById(id: string): Promise<import("../utils/types/nullable.type").NullableType<Part>>;
    update(id: string, dto: UpdatePartDto): Promise<Part | null>;
    remove(id: string): Promise<void>;
}
