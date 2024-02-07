import { combineReducers } from "@reduxjs/toolkit";
import AuthSlice from "./Slice/AuthSlice";
import DialogSlice from "./Slice/DialogSlice";
import UsersSlice from "./Slice/UsersSlice";

export const rootReducer = combineReducers({
    AuthSlice,
    DialogSlice,
    UsersSlice,
})