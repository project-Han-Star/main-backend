import { Injectable } from '@nestjs/common';
import { User } from 'src/types/User';

@Injectable()
export class UserService {
  private readonly users = [{ id: 1, username: 'hosung', password: 'asdf' }];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
