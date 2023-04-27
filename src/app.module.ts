import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { AuthorsModule } from './modules/authors/authors.module';
import { BooksModule } from './modules/books/books.module';

@Module({
  imports: [AuthorsModule, BooksModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
