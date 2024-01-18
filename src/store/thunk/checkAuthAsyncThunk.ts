import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { AuthResponse } from "../../models/response/AuthResponse";
import { API_URL } from "../../http";
import { redirect } from "react-router-dom";

export const checkAuth = createAsyncThunk(
    'checkAuth',
    async (value: null, thunkApi) => {
        try {
            const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, { withCredentials: true })
            localStorage.setItem('token', response.data.accessToken);
            return response.data.user;
        } catch (error: any) {
            console.log(error.response?.data?.message);
            return thunkApi.rejectWithValue(error.response.data.message || error)
        }
    }
)