export declare class Booking {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    userId: string;
    scooterId: string;
    startDatetime: Date;
    endDatetime?: Date;
    location?: string;
    status: string;
    notes?: string;
}
