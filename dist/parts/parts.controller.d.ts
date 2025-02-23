import { PartsService } from './parts.service';
import { CreatePartDto } from './dto/create-part.dto';
import { UpdatePartDto } from './dto/update-part.dto';
import { InfinityPaginationResponseDto } from '../utils/dto/infinity-pagination-response.dto';
import { Part } from './domain/part';
export declare class PartsController {
    private readonly partsService;
    constructor(partsService: PartsService);
    create(dto: CreatePartDto): Promise<Part>;
    findAll(page?: number, limit?: number): Promise<InfinityPaginationResponseDto<Part>>;
    findById(id: string): Promise<import("../utils/types/nullable.type").NullableType<Part>>;
    update(id: string, dto: UpdatePartDto): Promise<Part | null>;
    remove(id: string): Promise<void>;
}
