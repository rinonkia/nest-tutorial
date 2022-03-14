import { Injectable } from '@nestjs/common';
import { AuthorRepository } from './author.repository';

@Injectable()
export class AuthorService {
  constructor(private readonly authorRepository: AuthorRepository) {}

  async findByIdAndPosts(id: number) {
    return await this.authorRepository.findByIdAndPosts(id);
  }
}
