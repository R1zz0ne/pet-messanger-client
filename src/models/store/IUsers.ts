export interface IUsers {
    id: number,
    email: string,
}

export interface IUsersSlice {
    users: IUsers[]
}

export interface IUserDTO {
    email: string;
    isActivated: boolean;
    id: number;
}