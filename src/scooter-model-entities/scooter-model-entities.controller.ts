import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Query,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { ScooterModelEntitiesService } from './scooter-model-entities.service';
import { CreateScooterModelEntityDto } from './dto/create-scooter-model-entity.dto';
import { UpdateScooterModelEntityDto } from './dto/update-scooter-model-entity.dto';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { ScooterModelEntity } from './domain/scooter-model-entity';
import { AuthGuard } from '@nestjs/passport';
import {
  InfinityPaginationResponse,
  InfinityPaginationResponseDto,
} from '../utils/dto/infinity-pagination-response.dto';
import { infinityPagination } from '../utils/infinity-pagination';
import { FindAllScooterModelEntitiesDto } from './dto/find-all-scooter-model-entities.dto';

@ApiTags('ScooterModelEntities')
@ApiBearerAuth()
@UseGuards(AuthGuard('jwt'))
@Controller({
  path: 'scooter-model-entities',
  version: '1',
})
export class ScooterModelEntitiesController {
  constructor(
    private readonly scooterModelEntitiesService: ScooterModelEntitiesService,
  ) {}

  @Post()
  @ApiCreatedResponse({ type: ScooterModelEntity })
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createScooterModelEntityDto: CreateScooterModelEntityDto) {
    return this.scooterModelEntitiesService.create(createScooterModelEntityDto);
  }

  @Get()
  @ApiOkResponse({ type: InfinityPaginationResponse(ScooterModelEntity) })
  @HttpCode(HttpStatus.OK)
  async findAll(
    @Query() query: FindAllScooterModelEntitiesDto,
  ): Promise<InfinityPaginationResponseDto<ScooterModelEntity>> {
    const page = query?.page ?? 1;
    let limit = query?.limit ?? 10;
    if (limit > 50) {
      limit = 50;
    }

    return infinityPagination(
      await this.scooterModelEntitiesService.findAllWithPagination({
        paginationOptions: { page, limit },
      }),
      { page, limit },
    );
  }

  @Get(':id')
  @ApiParam({ name: 'id', type: String, required: true })
  @ApiOkResponse({ type: ScooterModelEntity })
  @HttpCode(HttpStatus.OK)
  findById(@Param('id') id: string) {
    return this.scooterModelEntitiesService.findById(id);
  }

  @Patch(':id')
  @ApiParam({ name: 'id', type: String, required: true })
  @ApiOkResponse({ type: ScooterModelEntity })
  @HttpCode(HttpStatus.OK)
  update(
    @Param('id') id: string,
    @Body() updateScooterModelEntityDto: UpdateScooterModelEntityDto,
  ) {
    return this.scooterModelEntitiesService.update(
      id,
      updateScooterModelEntityDto,
    );
  }

  @Delete(':id')
  @ApiParam({ name: 'id', type: String, required: true })
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string) {
    return this.scooterModelEntitiesService.remove(id);
  }
}
