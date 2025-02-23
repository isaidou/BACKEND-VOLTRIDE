import { ApiProperty } from '@nestjs/swagger';

export class Supplier {
  @ApiProperty()
  id: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty({ example: 'Supplier Inc.' })
  name: string;

  @ApiProperty({ example: 'John Doe', required: false })
  contactPerson?: string;

  @ApiProperty({ example: '123456789', required: false })
  phoneNumber?: string;

  @ApiProperty({ example: '123 Main St, City', required: false })
  address?: string;
}
