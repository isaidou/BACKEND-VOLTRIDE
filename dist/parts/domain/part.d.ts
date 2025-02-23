export declare class Part {
    id: string;
    name: string;
    description?: string;
    stockQuantity: number;
    minStockThreshold: number;
    price: number;
    lastEventTimestamp?: Date;
    createdAt: Date;
    updatedAt: Date;
}
