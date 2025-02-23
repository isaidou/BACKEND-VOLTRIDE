import { Repository } from 'typeorm';
import { MaintenanceRepository } from '../../maintenance.repository';
import { MaintenanceEntity } from '../entities/maintenance.entity';
import { Maintenance } from '../../../../domain/maintenance';
import { IPaginationOptions } from '../../../../../utils/types/pagination-options';
import { NullableType } from '../../../../../utils/types/nullable.type';
export declare class MaintenanceRelationalRepository implements MaintenanceRepository {
    private readonly repo;
    constructor(repo: Repository<MaintenanceEntity>);
    create(data: Omit<Maintenance, 'id' | 'createdAt' | 'updatedAt'>): Promise<Maintenance>;
    findAllWithPagination({ paginationOptions, }: {
        paginationOptions: IPaginationOptions;
    }): Promise<Maintenance[]>;
    findById(id: string): Promise<NullableType<Maintenance>>;
    update(id: string, payload: Partial<Maintenance>): Promise<Maintenance | null>;
    remove(id: string): Promise<void>;
}
