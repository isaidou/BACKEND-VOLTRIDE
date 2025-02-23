import { PartialType } from '@nestjs/swagger';
import { CreateScooterModelEntityDto } from './create-scooter-model-entity.dto';

/**
 * DTO pour la mise à jour d’un ScooterModelEntity.
 * Hérite des propriétés de CreateScooterModelEntityDto en étant toutes optionnelles (PartialType).
 */
export class UpdateScooterModelEntityDto extends PartialType(
  CreateScooterModelEntityDto,
) {
  // <updating-property />
}
