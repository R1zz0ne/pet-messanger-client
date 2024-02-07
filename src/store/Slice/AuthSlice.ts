import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IAuthState } from '../../models/store/IAuth';
import { IUserDTO } from '../../models/store/IUsers';

const initialState: IAuthState = {
    user: {} as IUserDTO,
    isAuth: false,
    isLoading: false,
}

export const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<IUserDTO>) => {
            state.isAuth = true;
            state.user = action.payload;
        },
    },
})

export default authSlice.reducer;