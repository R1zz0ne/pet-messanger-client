import { createAsyncThunk } from "@reduxjs/toolkit";
import DialogService from "../../services/DialogsService";

export const getMessages = createAsyncThunk(
    'getMessages',
    async (value: number, thunkAPI) => {
        try {
            const response = await DialogService.getMessages(value);
            return { messages: response.data, id: value };
        } catch (error: any) {
            console.log(error.response?.data?.message);
            return thunkAPI.rejectWithValue(error.response.data.message || error)
        }
    }
)