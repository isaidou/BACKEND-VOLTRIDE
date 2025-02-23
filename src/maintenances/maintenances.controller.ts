import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  HttpCode,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';
import { MaintenancesService } from './maintenances.service';
import { CreateMaintenanceDto } from './dto/create-maintenance.dto';
import { UpdateMaintenanceDto } from './dto/update-maintenance.dto';
import {
  ApiTags,
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiParam,
} from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import {
  InfinityPaginationResponse,
  InfinityPaginationResponseDto,
} from '../utils/dto/infinity-pagination-response.dto';
import { infinityPagination } from '../utils/infinity-pagination';
import { Maintenance } from './domain/maintenance';

@ApiTags('Maintenances')
@ApiBearerAuth()
@UseGuards(AuthGuard('jwt'))
@Controller({ path: 'maintenances', version: '1' })
export class MaintenancesController {
  constructor(private readonly maintenancesService: MaintenancesService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiCreatedResponse({ type: Maintenance })
  create(@Body() dto: CreateMaintenanceDto) {
    return this.maintenancesService.create(dto);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({ type: InfinityPaginationResponse(Maintenance) })
  async findAll(
    @Query('page') page = 1,
    @Query('limit') limit = 10,
  ): Promise<InfinityPaginationResponseDto<Maintenance>> {
    if (limit > 50) limit = 50;
    const data = await this.maintenancesService.findAllWithPagination({
      page: +page,
      limit: +limit,
    });
    return infinityPagination(data, { page: +page, limit: +limit });
  }

  @Get(':id')
  @ApiParam({ name: 'id', type: String, required: true })
  @HttpCode(HttpStatus.OK)
  findById(@Param('id') id: string) {
    return this.maintenancesService.findById(id);
  }

  @Patch(':id')
  @ApiParam({ name: 'id', type: String, required: true })
  @HttpCode(HttpStatus.OK)
  update(@Param('id') id: string, @Body() dto: UpdateMaintenanceDto) {
    return this.maintenancesService.update(id, dto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string) {
    return this.maintenancesService.remove(id);
  }

  // test
}
