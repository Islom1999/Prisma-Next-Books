import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { BookDto } from './dto';

@Injectable()
export class BooksService {
    constructor(private prisma: PrismaService){}

    async getAllBooks(){
        return await this.prisma.books.findMany()
    }
    async getOneBook(id: string | number){
        id = Number(id)
        return await this.prisma.books.findUnique({where: {id}})
    }
    async create(data: BookDto){
        return await this.prisma.books.create({data})
    }
    async delete(id:number | string){
        id = Number(id)
        return await this.prisma.books.delete({where: {id}})
    }
    async update(id:number | string, data: BookDto){
        id = Number(id)
        return await this.prisma.books.update({where: {id}, data: data})
    }
}
