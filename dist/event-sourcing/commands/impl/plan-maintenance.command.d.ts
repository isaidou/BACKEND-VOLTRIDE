export declare class PlanMaintenanceCommand {
    readonly scooterId: string;
    readonly maintenanceDate: Date;
    readonly type: string;
    readonly cost: number;
    readonly performedById?: string | undefined;
    constructor(scooterId: string, maintenanceDate: Date, type: string, cost: number, performedById?: string | undefined);
}
