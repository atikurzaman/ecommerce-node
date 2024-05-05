import { UserModel } from "../../domain/user";


export interface IUserRepository {
    addNewUser(user: UserModel): Promise<boolean>;
    // authenticateUser(details: Credential): Promise<string>;
}