import { IUser } from "../IUser";

export interface AuthState {
    user: IUser;
    isAuth: boolean;
    isLoading: boolean;
}

export interface AuthData {
    email: string;
    password: string
}