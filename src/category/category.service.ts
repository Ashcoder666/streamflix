import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Category } from './category.entity';
import { Model, Types } from 'mongoose';

@Injectable()
export class CategoryService {
    @InjectModel(Category.name) private categoryModel:Model<Category>

    async createCategory(data){
        const newCategory = new this.categoryModel({
            ...data,
        })
        await newCategory.save()
        return newCategory
    }

    async getAllCategory(){
        const allCategories = await this.categoryModel.find()
        return allCategories
    }

    async updateCategory(_id:Types.ObjectId,data){
       return await this.categoryModel.updateOne({_id},{data})
        
    }

    async deleteCategory(_id:Types.ObjectId){
        return await this.categoryModel.deleteOne({_id})
    }

    async getSingleCategory(_id:Types.ObjectId){
        return await this.categoryModel.findOne({_id})
    }
}
