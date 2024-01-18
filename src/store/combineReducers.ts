import { combineReducers } from "@reduxjs/toolkit";
import AuthSlice from "./AuthSlice";
import DialogSlice from "./DialogSlice";

export const rootReducer = combineReducers({
    AuthSlice,
    DialogSlice,
})