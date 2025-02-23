import { Module } from '@nestjs/common';
import { PartsService } from './parts.service';
import { PartsController } from './parts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PartEntity } from './infrastructure/persistence/relational/entities/part.entity';
import { PartRepository } from './infrastructure/persistence/part.repository';
import { PartRelationalRepository } from './infrastructure/persistence/relational/repositories/part.repository';

@Module({
  imports: [TypeOrmModule.forFeature([PartEntity])],
  controllers: [PartsController],
  providers: [
    PartsService,
    { provide: PartRepository, useClass: PartRelationalRepository },
  ],
  exports: [PartsService],
})
export class PartsModule {}
