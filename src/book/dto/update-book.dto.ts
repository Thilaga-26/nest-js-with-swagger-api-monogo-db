import { Category } from '../schemas/book.schema';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateBookDto {

  @ApiProperty()
  title: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  author: string;

  @ApiProperty()
  price: number;

  @ApiProperty()
  category: Category;
}