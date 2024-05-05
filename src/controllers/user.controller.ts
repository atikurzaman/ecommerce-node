import { UserModel } from "../application/domain/user";
import { AuthenticateUserUseCase } from "../application/use-cases/register-user/authenticate-user.use-case";
import { RegisterUserUseCase } from "../application/use-cases/register-user/register-user.use-case";
import { UserRepository } from "../persistence/repositories/user.repository";
import { Token } from "../token";


export class UserController {
    async registerUser(user: UserModel): Promise<string> {
        const repo = UserRepository.getInstance();
        const tokenGenerator = new Token();
        const useCase = new RegisterUserUseCase(repo, tokenGenerator);
        const data = useCase.execute(user);
        return data;
    }

    // async authenticateUser(details: Credential): Promise<string> {
    //     const repo = UserRepository.getInstance();
    //     const tokenGenerator = new Token();
    //     const useCase = new AuthenticateUserUseCase(repo, tokenGenerator);
    //     const data = useCase.execute(details);
    //     return data;
    // }
}