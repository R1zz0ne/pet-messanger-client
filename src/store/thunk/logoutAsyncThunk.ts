import AuthService from '../../services/AuthService';
import { createAsyncThunk } from "@reduxjs/toolkit";
import { IUser } from '../../models/IUser';

export const logout = createAsyncThunk(
    'logout',
    async (value, thunkAPI) => {
        try {
            const response = await AuthService.logout();
            localStorage.removeItem('token');
            return {} as IUser;
        } catch (error: any) {
            console.log(error.response?.data?.message);
            return thunkAPI.rejectWithValue(error.response.data.message || error)
        }
    }
)