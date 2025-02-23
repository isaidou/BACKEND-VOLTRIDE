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
import { ScootersService } from './scooters.service';
import { CreateScooterDto } from './dto/create-scooter.dto';
import { UpdateScooterDto } from './dto/update-scooter.dto';
import {
  ApiTags,
  ApiBearerAuth,
  ApiOkResponse,
  ApiCreatedResponse,
} from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import {
  InfinityPaginationResponseDto,
  InfinityPaginationResponse,
} from '../utils/dto/infinity-pagination-response.dto';
import { infinityPagination } from '../utils/infinity-pagination';
import { Scooter } from './domain/scooter';

@ApiTags('Scooters')
@ApiBearerAuth()
@UseGuards(AuthGuard('jwt'))
@Controller({ path: 'scooters', version: '1' })
export class ScootersController {
  constructor(private readonly scootersService: ScootersService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiCreatedResponse({ type: Scooter })
  create(@Body() createScooterDto: CreateScooterDto) {
    return this.scootersService.create(createScooterDto);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({ type: InfinityPaginationResponse(Scooter) })
  async findAll(
    @Query('page') page = 1,
    @Query('limit') limit = 10,
  ): Promise<InfinityPaginationResponseDto<Scooter>> {
    if (limit > 50) limit = 50;
    const data = await this.scootersService.findAllWithPagination({
      page: +page,
      limit: +limit,
    });
    return infinityPagination(data, { page: +page, limit: +limit });
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async findById(@Param('id') id: string) {
    return this.scootersService.findById(id);
  }

  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  async update(@Param('id') id: string, @Body() dto: UpdateScooterDto) {
    return this.scootersService.update(id, dto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id') id: string) {
    return this.scootersService.remove(id);
  }
}
