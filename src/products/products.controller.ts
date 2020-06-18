import {
  Controller,
  Get,
  Post,
  Body,
  ParseIntPipe,
  Param,
  ValidationPipe,
} from '@nestjs/common';
import { CreateProductDto } from './dto/product.dto';
import { Product } from './interfaces/product.interface';
import { ProductsService } from './products.service';
@Controller('v1/products')
export class ProductsController {
  constructor(private productService: ProductsService) {}

  @Post('add')
  async create(@Body(new ValidationPipe()) createProductDto: CreateProductDto) {
    this.productService.create(createProductDto);
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.productService.findOne(id);
  }
}
