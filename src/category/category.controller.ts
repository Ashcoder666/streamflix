import { Body, Controller, Get, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { CreateCategoryDto } from './dto/createCategory.dto';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {
    constructor(
        private readonly categoryService:CategoryService
    ){}
    @Post()
    @ApiOperation({ summary: 'create new category' })
    @HttpCode(HttpStatus.CREATED)
    async createCategory(@Body() createCategoryDto:CreateCategoryDto){
        const newCategory = await this.categoryService.createCategory(createCategoryDto)
        return {message:"success",data:newCategory}
    }

    @Get()
    @ApiOperation({summary:"get all categories"})
    @HttpCode(HttpStatus.ACCEPTED)
    async getAllCategories(){
        
    }
}
