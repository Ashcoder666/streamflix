import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
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
        const allCategories = await this.categoryService.getAllCategory()
        return {message:"success",data:allCategories}
    }


    @Get(':id')
    @ApiOperation({summary:"get a category details"})
    @HttpCode(HttpStatus.ACCEPTED)
    async getSingleCategory(@Param() param){
        const categoryDetails = await this.categoryService.getSingleCategory(param.id)
        return categoryDetails
    }

    @Patch(':id')
    @ApiOperation({summary:"update a category"})
    @HttpCode(HttpStatus.ACCEPTED)
    async updateCategory(@Param() param,@Body() createCategoryDto:CreateCategoryDto){
        const categoryDetails = await this.categoryService.updateCategory(param.id,createCategoryDto)
        return categoryDetails
    }


    @Delete(':id')
    @ApiOperation({summary:"delete a category"})
    @HttpCode(HttpStatus.ACCEPTED)
    async deleteCategory(@Param() param){
        const categoryDetails = await this.categoryService.deleteCategory(param.id)
        return categoryDetails
    }
}
