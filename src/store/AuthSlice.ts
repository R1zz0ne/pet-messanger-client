import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IUser } from '../models/IUser';
import { AuthState } from '../models/store/Auth';
import { login } from './thunk/loginAsyncThunk';
import { registration } from './thunk/registrationAsyncThunk';
import { checkAuth } from './thunk/checkAuthAsyncThunk';
import { logout } from './thunk/logoutAsyncThunk';

const initialState: AuthState = {
    user: {} as IUser,
    isAuth: false,
    isLoading: false,
}

export const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            //login
            // .addCase(login.pending, (state) => {

            // })
            .addCase(login.fulfilled, (state, action: PayloadAction<IUser>) => {
                state.isAuth = true;
                state.user = action.payload;
            })
            .addCase(login.rejected, (state, action: PayloadAction<any>) => {
                alert(action.payload)
            })
            //registration
            // .addCase(registration.pending, (state) => {

            // })
            .addCase(registration.fulfilled, (state, action: PayloadAction<IUser>) => {
                state.isAuth = true;
                state.user = action.payload;
            })
            .addCase(registration.rejected, (state, action: PayloadAction<any>) => {
                alert(action.payload)
            })
            //logout
            // .addCase(logout.pending, (state) => {

            // })
            .addCase(logout.fulfilled, (state, action: PayloadAction<IUser>) => {
                state.isAuth = false;
                state.user = action.payload;
            })
            .addCase(logout.rejected, (state, action: PayloadAction<any>) => {
                alert(action.payload)
            })

            //checkAuth
            .addCase(checkAuth.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(checkAuth.fulfilled, (state, action: PayloadAction<IUser>) => {
                state.isAuth = true;
                state.user = action.payload;
                state.isLoading = false;
            })
            .addCase(checkAuth.rejected, (state, action: PayloadAction<any>) => {
                state.isLoading = false;
                alert(action.payload)
            })
    },
})

export default authSlice.reducer;