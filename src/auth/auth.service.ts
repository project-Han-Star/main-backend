import { Injectable } from '@nestjs/common';

interface User {
  id: number;
  username: string;
  password: string;
}

@Injectable()
export class AuthService {
  private readonly users = [{ id: 1, username: 'hosung', password: 'asdf' }];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
