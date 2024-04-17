import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';

export enum Category {
  ADVENTURE = 'Adventure',
  CALSSICS = 'Classics',
  CRIME = 'Crime',
  FANTASY = 'Fantasy',
}

@Schema()
export class Book {

  @ApiProperty()
  @Prop()
  title: string;


  @ApiProperty()
  @Prop()
  description: string;

  @ApiProperty()
  @Prop()
  author: string;

  @ApiProperty()
  @Prop()
  price: number;

  @ApiProperty()
  @Prop()
  category: Category;
}

export const BookSchema = SchemaFactory.createForClass(Book);