import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { IUsers, IUsersSlice } from "../../models/store/IUsers";

const initialState: IUsersSlice = {
    users: []
}

export const usersSlice = createSlice({
    name: 'usersSlice',
    initialState,
    reducers: {
        getUsersAC: (state, action: PayloadAction<IUsers[]>) => {
            state.users = action.payload;
        }
    }
})

export default usersSlice.reducer;