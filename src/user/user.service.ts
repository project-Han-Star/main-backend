import { Injectable } from '@nestjs/common';
import { User } from 'src/types/User';

@Injectable()
export class UserService {
  private readonly users = [{ id: 1, email: 'hosung', password: 'asdf' }];

  async findOne(email: string): Promise<User | undefined> {
    return this.users.find((user) => user.email === email);
  }
}
