import { MaintenanceRepository } from './infrastructure/persistence/maintenance.repository';
import { CreateMaintenanceDto } from './dto/create-maintenance.dto';
import { UpdateMaintenanceDto } from './dto/update-maintenance.dto';
import { IPaginationOptions } from '../utils/types/pagination-options';
import { Maintenance } from './domain/maintenance';
export declare class MaintenancesService {
    private readonly maintenanceRepo;
    constructor(maintenanceRepo: MaintenanceRepository);
    create(dto: CreateMaintenanceDto): Promise<Maintenance>;
    findAllWithPagination(paginationOptions: IPaginationOptions): Promise<Maintenance[]>;
    findById(id: string): Promise<import("../utils/types/nullable.type").NullableType<Maintenance>>;
    update(id: string, dto: UpdateMaintenanceDto): Promise<Maintenance | null>;
    remove(id: string): Promise<void>;
}
