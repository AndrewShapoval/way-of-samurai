import {ActionsTypes} from "./store";
import {Dispatch} from "redux";
import {authApi} from "../api/api";
import {stopSubmit} from "redux-form";

export type initialStateType = {
    id: number | null
    email: string | null
    login: string | null
    isFetching: boolean
    isAuth: boolean
}

let initialState: initialStateType = {
    id: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false
}

const authReducer = (state: initialStateType = initialState, action: ActionsTypes): initialStateType => {
    switch (action.type) {
        case 'AUTH/SET_USER_DATA':
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state
    }
}

export const setAuthUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean) => {
    return {
        type: 'AUTH/SET_USER_DATA',
        payload: {id, email, login, isAuth}
    } as const
}

export const getAuthUserData = () => {
    return async (dispatch: Dispatch<ActionsTypes>) => {
        let response = await authApi.me()
        if (response.data.resultCode === 0) {
            let {id, login, email} = response.data.data
            dispatch(setAuthUserData(id, email, login, true))
        }
    }
}

export const login = (email: string, password: string, rememberMe: boolean) => {
    return async (dispatch: Dispatch<ActionsTypes>) => {
        let response = await authApi.login(email, password, rememberMe)
        if (response.data.resultCode === 0) {
            dispatch(getAuthUserData())
        } else {
            let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
            dispatch(stopSubmit("Login", {_error: message}))
        }
    }
}

export const logout = () => {
    return async (dispatch: Dispatch<ActionsTypes>) => {
        let response = await authApi.logout()
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false))
        }
    }
}


export default authReducer;