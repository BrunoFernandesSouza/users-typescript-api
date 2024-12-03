import { User } from "../../models/users";
import { HttpResponse } from "../protocols";

export interface IGetUsersControllers {
    handle() :Promise<HttpResponse<User[]>>;
}

export interface IGetUsersRepository{
    getUsers(): Promise<User[]>
}