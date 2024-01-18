import AuthService from '../../services/AuthService';
import { AuthData } from '../../models/store/Auth';
import { createAsyncThunk } from "@reduxjs/toolkit";

export const login = createAsyncThunk(
    'login',
    async (value: AuthData, thunkAPI) => {
        try {
            const response = await AuthService.login(value.email, value.password);
            localStorage.setItem('token', response.data.accessToken);
            return response.data.user;
        } catch (error: any) {
            console.log(error.response?.data?.message);
            return thunkAPI.rejectWithValue(error.response.data.message || error)
        }
    }
)