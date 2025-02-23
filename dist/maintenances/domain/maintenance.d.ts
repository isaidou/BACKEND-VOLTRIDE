export declare class Maintenance {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    type: string;
    maintenanceDate?: Date;
    cost: number;
    notes?: string;
    scooterId: string;
    performedById?: string;
    currentMileage?: number;
    currentChargeCycles?: number;
}
