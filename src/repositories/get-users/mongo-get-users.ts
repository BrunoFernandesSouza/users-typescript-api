import { IGetUsersRepository } from "../../controllers/get-users/protocols";
import { User } from "../../models/users";

export class MongoGetUsersRepository implements IGetUsersRepository {
  async getUsers(): Promise<User[]> {
    return [
      {
        firstName: "Bruno",
        lastName: "Souza",
        email: "bruno@gmail.com",
        password: "123",
      },
    ];
  }
}
