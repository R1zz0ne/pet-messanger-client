import { io } from "socket.io-client";
import { authSlice } from "../store/Slice/AuthSlice";
import { store } from "../store/store";
import { dialogsSlice } from "../store/Slice/DialogSlice";
import { usersSlice } from "../store/Slice/UsersSlice";
const socket = io('ws://localhost:5001', {
    extraHeaders: {
        accessToken: localStorage.getItem('token') as string
    }
});

// socket.on('connection', (data) => { console.log('connected') })
socket.on('login', (data) => {
    localStorage.setItem('token', data.accessToken);
    localStorage.setItem('refresh', data.refreshToken); /*TODO: нужно будет пересмотреть, возможно этот токен лучше 
    хранить в куках и настроить куки на WS, если получится*/
    store.dispatch(authSlice.actions.login(data.user))
})

socket.on('registration', (data) => {
    console.log(data); /*TODO: сделать нормальную обработку и возможно вывод сообщения, что регистрация успешно 
    выполнена и редирект на форму авторизации, либо при успешной регистрации автоматический логин выполнять*/
})

socket.on('error', (data) => {
    console.log(data);
})
socket.on('getDialogs', (data) => {
    store.dispatch(dialogsSlice.actions.getDialogsAC(data.dialogs))
})
socket.on('getMessages', (data) => {
    store.dispatch(dialogsSlice.actions.getMessagesAC(data.messages))
})
socket.on('getUsers', (data) => {
    store.dispatch(usersSlice.actions.getUsersAC(data.users))
})
socket.on('setDialog', (data) => {
    store.dispatch(dialogsSlice.actions.setDialogAC(data))
})
socket.on('setMessage', (data) => {
    store.dispatch(dialogsSlice.actions.setMessageAC(data.message))
})


export const loginEmit = (email: string, password: string) => {
    socket.emit('login', { email, password })
}

export const registrationEmit = (email: string, password: string) => {
    socket.emit('registration', { email, password })
}

export const checkAuthEmit = () => {
    socket.emit('refresh', { refreshtoken: localStorage.getItem('refresh') })
}

export const getDialogsEmit = () => {
    socket.emit('getDialogs', {})
}

export const getMessagesEmit = (id: number) => {
    socket.emit('getMessages', { id })
}

export const getUsersEmit = (filter: string) => {
    socket.emit('getUsers', { filter })
}

export const setDialogEmit = (userid: number, message: string) => { //реализовывать после получения списка юзеров
    socket.emit('setDialog', { userid, message })
}

export const setMessageEmit = (id: number, message: string) => { //реализовывать после получения списка юзеров
    socket.emit('setMessage', { id, message })
}


export default socket;