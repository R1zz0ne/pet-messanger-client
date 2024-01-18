import * as login from "./thunk/loginAsyncThunk";
import * as registration from "./thunk/registrationAsyncThunk";
import * as logout from "./thunk/logoutAsyncThunk";
import * as checkAuth from "./thunk/checkAuthAsyncThunk";
import * as getDialogs from "./thunk/getDialogsAsyncThunk";
import * as getMessages from './thunk/getMessagesAsyncThunk';

const actionCreators = {
    ...login,
    ...registration,
    ...logout,
    ...checkAuth,
    ...getDialogs,
    ...getMessages
}

export default actionCreators