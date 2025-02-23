export declare class MaintenancePlannedEvent {
    readonly aggregateId: string;
    readonly maintenanceDate: Date;
    readonly type: string;
    readonly cost: number;
    readonly performedById?: string | undefined;
    readonly version?: number | undefined;
    constructor(aggregateId: string, maintenanceDate: Date, type: string, cost: number, performedById?: string | undefined, version?: number | undefined);
}
