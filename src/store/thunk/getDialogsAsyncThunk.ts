import { createAsyncThunk } from "@reduxjs/toolkit";
import DialogService from "../../services/DialogsService";

export const getDialogs = createAsyncThunk(
    'getdialogs',
    async (value, thunkAPI) => {
        try {
            const response = await DialogService.getDialogs();
            return response.data;
        } catch (error: any) {
            console.log(error.response?.data?.message);
            return thunkAPI.rejectWithValue(error.response.data.message || error)
        }
    }
)