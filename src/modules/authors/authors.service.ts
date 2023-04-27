import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthorDto } from './dto';

@Injectable()
export class AuthorsService {

    constructor(private prisma: PrismaService, ){}

    async getAllAuthor(){
        return await this.prisma.author.findMany()
    }
    async getOneAuthor(id: string | number){
        id = Number(id)
        return await this.prisma.author.findUnique({where: {id}})
    }
    async create(data: AuthorDto){
        return await this.prisma.author.create({data})
    }
    async delete(id:number | string){
        id = Number(id)
        return await this.prisma.author.delete({where: {id}})
    }
    async update(id:number | string, data: AuthorDto){
        id = Number(id)
        return await this.prisma.author.update({where: {id}, data: data})
    }
    
}
