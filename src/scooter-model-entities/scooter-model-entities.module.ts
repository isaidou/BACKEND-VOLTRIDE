import { Module } from '@nestjs/common';
import { ScooterModelEntitiesService } from './scooter-model-entities.service';
import { ScooterModelEntitiesController } from './scooter-model-entities.controller';
import { RelationalScooterModelEntityPersistenceModule } from './infrastructure/persistence/relational/relational-persistence.module';

@Module({
  imports: [
    // Importez ici d’autres modules si nécessaire (p.ex. MailModule, etc.)
    RelationalScooterModelEntityPersistenceModule,
  ],
  controllers: [ScooterModelEntitiesController],
  providers: [ScooterModelEntitiesService],
  exports: [
    ScooterModelEntitiesService,
    RelationalScooterModelEntityPersistenceModule,
  ],
})
export class ScooterModelEntitiesModule {}
