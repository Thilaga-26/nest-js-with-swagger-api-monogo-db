import { Category } from '../schemas/book.schema';
import { ApiProperty } from '@nestjs/swagger';

export class CreateBookDto {

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