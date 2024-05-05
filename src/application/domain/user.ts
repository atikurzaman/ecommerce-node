import { UserType } from "./user-type";

export interface UserModel {
    _id?: string | null;
    email: string;
    password?: string;
    userType: UserType;
    firstName: string | null;
    lastName: string | null;
}