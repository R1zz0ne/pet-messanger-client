import { IUserDTO } from "./IUsers";

export interface IAuthState {
    user: IUserDTO;
    isAuth: boolean;
    isLoading: boolean;
}