import { ScooterModelEntity } from '../../../../domain/scooter-model-entity';
import { ScooterModelEntityEntity } from '../entities/scooter-model-entity.entity';
export declare class ScooterModelEntityMapper {
    static toDomain(raw: ScooterModelEntityEntity): ScooterModelEntity;
    static toPersistence(domainEntity: ScooterModelEntity): ScooterModelEntityEntity;
}
