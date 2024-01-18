import { useDispatch } from "react-redux"
import { AppDispatch } from "../store/store"
import { bindActionCreators } from "@reduxjs/toolkit";
import actionCreators from "../store/combinedAC";

export const useActions = () => {
    const dispatch = useDispatch<AppDispatch>();
    return bindActionCreators(actionCreators, dispatch);
}