import { UserModel } from "../../application/domain/user";
import { UserEntity } from "../../entities/user.entity";
import { UserMapper } from "../mapper/user.mapper";
import { IUserRepository } from "../../application/contracts/repositories/user.repository";
import { User } from "../mongoose-model/user.model";

 
export class UserRepository implements IUserRepository  {
    
    private static instance: UserRepository;    
    private userMapper: UserMapper;

    constructor() {       
        this.userMapper = new UserMapper();
    }
    
    static getInstance(): UserRepository {
        if(!UserRepository.instance) {
            UserRepository.instance = new UserRepository();
        }
        return UserRepository.instance;
    }

    async addNewUser(user: UserModel): Promise<boolean> {
       const data: UserEntity = this.userMapper.mapFrom(user);
       const result = await new User(data).save();
       if(result) {
           return new Promise((resolve) => resolve(true));
       }
       return new Promise((resolve, reject) => reject());
    }

    // async authenticateUser(details: Credential): Promise<string> {
    //    const result: UserModel = await User.find(details);
    //    if(result) {
    //        return new Promise((resolve) => resolve(result._id as string));
    //    }
    //    return new Promise((resolve, reject) => reject());
    // }
}