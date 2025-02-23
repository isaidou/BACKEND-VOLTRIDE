import { ApiProperty } from '@nestjs/swagger';

export class Incident {
  @ApiProperty()
  id: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty({ example: 'uuid-scooter' })
  scooterId: string;

  @ApiProperty({ example: 'uuid-user', required: false })
  reportedById?: string;

  @ApiProperty({ example: '2025-06-01T12:00:00Z' })
  dateReported: Date;

  @ApiProperty({ example: "Description de l'incident" })
  description: string;

  @ApiProperty({ example: 'open' })
  status: string;

  @ApiProperty({
    example: true,
    description: "Impact sur l'opération (true = critique)",
  })
  impact_on_operation: boolean;

  @ApiProperty({ required: false })
  resolutionNotes?: string;
}
