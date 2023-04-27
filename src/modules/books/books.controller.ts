import { Body, Controller, Get, HttpCode, Param, Post } from '@nestjs/common';
import { BooksService } from './books.service';
import { BookDto } from './dto';

@Controller('books')
export class BooksController {
    constructor(private bookSevice: BooksService){}

    @HttpCode(200)
    @Get()
    async getAuthor(){
        try {
            return this.bookSevice.getAllBooks()
        } catch (error) {
            return {message: error.message}
        }
    }

    @HttpCode(200)
    @Get('/:id')
    async getOneAuthor(@Param('id') id:string){
        try {
            return this.bookSevice.getOneBook(id)
        } catch (error) {
            return {message: error.message}
        }
    }

    @HttpCode(200)
    @Post('/create')
    async createAuthor(@Body() data: BookDto){
        try {
            return this.bookSevice.create(data)
        } catch (error) {
            return {message: error.message}
        }
    }
 
    @HttpCode(200)
    @Post('/delete/:id')
    async deleteAuthor(@Param('id') id:string){
        try {
            return this.bookSevice.delete(id)
        } catch (error) {
            return {message: error.message}
        }
    }

    @HttpCode(200)
    @Post('/update/:id')
    async updateAuthor(@Param('id') id:number, @Body() data: BookDto){
        try {
            return this.bookSevice.update(id,data)
        } catch (error) {
            return {message: error.message}
        } 
    }


}
