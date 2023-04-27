import { Body, Controller, Get, HttpCode, Param, Post } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthorsService } from './authors.service';
import { AuthorDto } from './dto';


@Controller('authors')
export class AuthorsController {
    constructor(private readonly authorService: AuthorsService,) {}

    @HttpCode(200)
    @Get()
    async getAuthor(){
        try {
            return this.authorService.getAllAuthor()
        } catch (error) {
            return {message: error.message}
        }
    }

    @HttpCode(200)
    @Get('/:id')
    async getOneAuthor(@Param('id') id:string){
        try {
            return this.authorService.getOneAuthor(id)
        } catch (error) {
            return {message: error.message}
        }
    }

    @HttpCode(200)
    @Post('/create')
    async createAuthor(@Body() data: AuthorDto){
        try {
            return this.authorService.create(data)
        } catch (error) {
            return {message: error.message}
        }
    }
 
    @HttpCode(200)
    @Post('/delete/:id')
    async deleteAuthor(@Param('id') id:string){
        try {
            return this.authorService.delete(id)
        } catch (error) {
            return {message: error.message}
        }
    }

    @HttpCode(200)
    @Post('/update/:id')
    async updateAuthor(@Param('id') id:number, @Body() data: AuthorDto){
        try {
            return this.authorService.update(id,data)
        } catch (error) {
            return {message: error.message}
        } 
    }
}
