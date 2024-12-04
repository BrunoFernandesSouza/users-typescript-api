import validaor from "validator";
import { User } from "../../models/users";
import { HttpRequest, HttpResponse, IController } from "../protocols";
import { CreateUserParams, ICreateUserRepository } from "./protocols";
import { badRequests, created, serverError } from "../helpers";

export class CreateUserController implements IController {
  constructor(private readonly createUserRepository: ICreateUserRepository) {}
  async handle(
    httpRequest: HttpRequest<CreateUserParams>
  ): Promise<HttpResponse<User | string>> {
    try {
      // Verificar campos obrigatórios
      const requiredFields = ["firstName", "lastName", "email", "password"];

      for (const field of requiredFields) {
        if (!httpRequest?.body?.[field as keyof CreateUserParams]?.length) {
          return badRequests(`Field ${field} is required.`);
        }
      }

      // validar se email é valido
      const emailIsValid = validaor.isEmail(httpRequest.body!.email);

      if (!emailIsValid) {
        return badRequests("E-mail is invalid!");
      }

      const user = await this.createUserRepository.createUser(
        httpRequest.body!
      );

      return created<User>(user);
    } catch (error) {
      return serverError();
    }
  }
}
