import { IUsers } from "../store/IUsers"

export interface IDialogItemProps {
    name: string,
    id: number,
    userid: number,
    isDialog: string,
    setIsDialog: React.Dispatch<React.SetStateAction<string>>,
}

export interface IDialogSearchProps {
    setIsMenu: React.Dispatch<React.SetStateAction<boolean>>
    setSearchValue: React.Dispatch<React.SetStateAction<string>>
}

export interface IDialogsProps {
    setIsMenu: React.Dispatch<React.SetStateAction<boolean>>
    setIsDialog: React.Dispatch<React.SetStateAction<string>>
    isDialog: string,
    searchUsers: IUsers[],
}
