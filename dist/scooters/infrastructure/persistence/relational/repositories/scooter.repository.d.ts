import { Repository } from 'typeorm';
import { ScooterEntity } from '../entities/scooter.entity';
import { NullableType } from '../../../../../utils/types/nullable.type';
import { Scooter } from '../../../../domain/scooter';
import { ScooterRepository } from '../../scooter.repository';
import { IPaginationOptions } from '../../../../../utils/types/pagination-options';
export declare class ScooterRelationalRepository implements ScooterRepository {
    private readonly repo;
    constructor(repo: Repository<ScooterEntity>);
    create(data: Omit<Scooter, 'id' | 'createdAt' | 'updatedAt'>): Promise<Scooter>;
    findAllWithPagination({ paginationOptions, }: {
        paginationOptions: IPaginationOptions;
    }): Promise<Scooter[]>;
    findById(id: string): Promise<NullableType<Scooter>>;
    update(id: string, payload: Partial<Scooter>): Promise<Scooter | null>;
    remove(id: string): Promise<void>;
}
