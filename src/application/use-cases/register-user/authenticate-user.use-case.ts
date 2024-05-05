import { UseCase } from "../../base";
import { IUserRepository } from "../../contracts/repositories/user.repository";
import { ITokenGenerator } from "../../contracts/token/token";

export class AuthenticateUserUseCase implements UseCase<Credential, string> {
    repository: IUserRepository;
    tokenGen: ITokenGenerator;

    constructor(repo: IUserRepository, tGen: ITokenGenerator) {
        this.repository = repo;
        this.tokenGen = tGen;
    }
    execute(params: Credential): Promise<string> {
        throw new Error("Method not implemented.");
    }

    // async execute(params: Credential): Promise<string> {
    //     const result = await this.repository.authenticateUser(params);
    //     if(result) {
    //         const token = this.tokenGen.generateToken(result);
    //         return new Promise((resolve) => resolve(token));
    //     }
    //     return new Promise((res, reject) => reject());
    // }

}