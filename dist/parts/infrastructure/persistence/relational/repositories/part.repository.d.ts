import { Repository } from 'typeorm';
import { PartRepository } from '../../part.repository';
import { PartEntity } from '../entities/part.entity';
import { Part } from '../../../../domain/part';
import { IPaginationOptions } from '../../../../../utils/types/pagination-options';
import { NullableType } from '../../../../../utils/types/nullable.type';
export declare class PartRelationalRepository implements PartRepository {
    private readonly repo;
    constructor(repo: Repository<PartEntity>);
    create(data: Omit<Part, 'id' | 'lastEventTimestamp' | 'createdAt' | 'updatedAt'>): Promise<Part>;
    findAllWithPagination({ paginationOptions, }: {
        paginationOptions: IPaginationOptions;
    }): Promise<Part[]>;
    findById(id: string): Promise<NullableType<Part>>;
    update(id: string, payload: Partial<Part>): Promise<Part | null>;
    remove(id: string): Promise<void>;
}
