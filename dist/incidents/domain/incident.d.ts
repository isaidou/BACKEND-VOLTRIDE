export declare class Incident {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    scooterId: string;
    reportedById?: string;
    dateReported: Date;
    description: string;
    status: string;
    impact_on_operation: boolean;
    resolutionNotes?: string;
}
