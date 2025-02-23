export class PlanMaintenanceCommand {
  constructor(
    public readonly scooterId: string,
    public readonly maintenanceDate: Date,
    public readonly type: string, // 'preventive' ou 'corrective'
    public readonly cost: number,
    public readonly performedById?: string,
  ) {}
}
