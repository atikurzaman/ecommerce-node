import { UserType } from "../application/domain/user-type";


export interface UserEntity {
    _id: string | null;
    email: string;
    password?: string;
    userType: UserType;
    firstName: string | null;
    lastName: string | null;
}