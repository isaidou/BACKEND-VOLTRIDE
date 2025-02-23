import { Part } from '../../../../domain/part';
import { PartEntity } from '../entities/part.entity';
export declare class PartMapper {
    static toDomain(raw: PartEntity): Part;
    static toPersistence(domain: Part): PartEntity;
}
