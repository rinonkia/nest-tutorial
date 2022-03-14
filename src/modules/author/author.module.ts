import { Module } from '@nestjs/common';
import { AuthorService } from './author.service';
import { AuthorResolver } from './author.resolver';
import { AuthorRepository } from './author.repository';

@Module({
  providers: [AuthorService, AuthorRepository, AuthorResolver],
})
export class AuthorModule {}
