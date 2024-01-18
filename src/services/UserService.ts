import { AxiosResponse } from "axios";
import $api from "../http";
import { Users } from "../components/Dialogs/Dialogs";

export default class UserService {
    static getUsers(value: string): Promise<AxiosResponse<Users[]>> {
        return $api.get<Users[]>(`/users?query=${value}`)
    }
}