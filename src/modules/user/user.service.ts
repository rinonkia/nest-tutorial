import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  findAll() {
    return 'findAll users';
  }

  create() {
    return 'create user';
  }
}
