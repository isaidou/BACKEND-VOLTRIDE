import { Scooter } from '../../../../domain/scooter';
import { ScooterEntity } from '../entities/scooter.entity';
export declare class ScooterMapper {
    static toDomain(raw: ScooterEntity): Scooter;
    static toPersistence(domain: Scooter): ScooterEntity;
}
