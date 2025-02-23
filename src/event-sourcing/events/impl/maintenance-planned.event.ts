export class MaintenancePlannedEvent {
  constructor(
    public readonly aggregateId: string,
    public readonly maintenanceDate: Date,
    public readonly type: string,
    public readonly cost: number,
    public readonly performedById?: string,
    public readonly version?: number,
  ) {}
}
