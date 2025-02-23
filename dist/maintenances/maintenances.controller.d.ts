import { MaintenancesService } from './maintenances.service';
import { CreateMaintenanceDto } from './dto/create-maintenance.dto';
import { UpdateMaintenanceDto } from './dto/update-maintenance.dto';
import { InfinityPaginationResponseDto } from '../utils/dto/infinity-pagination-response.dto';
import { Maintenance } from './domain/maintenance';
export declare class MaintenancesController {
    private readonly maintenancesService;
    constructor(maintenancesService: MaintenancesService);
    create(dto: CreateMaintenanceDto): Promise<Maintenance>;
    findAll(page?: number, limit?: number): Promise<InfinityPaginationResponseDto<Maintenance>>;
    findById(id: string): Promise<import("../utils/types/nullable.type").NullableType<Maintenance>>;
    update(id: string, dto: UpdateMaintenanceDto): Promise<Maintenance | null>;
    remove(id: string): Promise<void>;
}
