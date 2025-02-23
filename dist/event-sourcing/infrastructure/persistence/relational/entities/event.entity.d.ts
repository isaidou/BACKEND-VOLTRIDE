export declare class EventEntity {
    id: string;
    aggregateId: string;
    aggregateType: string;
    eventType: string;
    eventPayload: any;
    eventTimestamp: Date;
    version: number;
    processed: boolean;
}
