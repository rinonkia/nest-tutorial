import { Injectable } from '@nestjs/common';
import { Author } from 'src/domains/author.domain';

@Injectable()
export class AuthorService {
  private authors: Author[] = [
    {
      id: 1,
      firstName: 'Ichiro',
      lastName: 'Suzuki',
      like: 0,
    },
    {
      id: 2,
      firstName: 'Hanako',
      lastName: 'Yamada',
      like: 0,
    },
  ];

  findAll(): Author[] {
    return this.authors;
  }
}
