import { Controller, Get, Post, Body, } from '@nestjs/common';
import {CreateProductDto} from './dto/product.dto';
import {Product} from './interfaces/product.interface'
import {ProductsService} from './products.service'
@Controller('products')
export class ProductsController {
    constructor(private productService: ProductsService){}
    
    @Post()
    async create(@Body() createProductDto:CreateProductDto){
        this.productService.create(createProductDto);
    }
    
    @Get()
    findAll(): string {
      return 'This action returns all cats';
    }
}