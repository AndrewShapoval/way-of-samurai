import {ActionsTypes} from "./store";
import {Dispatch} from "redux";
import {authApi, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";

export type initialStateType = {
    id: number | null
    email: string | null
    login: string | null
    isFetching: boolean
    isAuth: boolean
    captchaUrl: string | null
}

let initialState: initialStateType = {
    id: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false,
    captchaUrl: null
}

const authReducer = (state: initialStateType = initialState, action: ActionsTypes): initialStateType => {
    switch (action.type) {
        case 'AUTH/SET_USER_DATA':
            return {
                ...state,
                ...action.payload,
            }
        case 'AUTH/SET_CAPTCHA_URL':
            return {...state, captchaUrl: action.captchaUrl}
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

export const setCaptchaUrl = (captchaUrl: string) => ({type: 'AUTH/SET_CAPTCHA_URL', captchaUrl} as const)

export const getAuthUserData = () => {
    return async (dispatch: Dispatch<ActionsTypes>) => {
        let response = await authApi.me()
        if (response.data.resultCode === 0) {
            let {id, login, email} = response.data.data
            dispatch(setAuthUserData(id, email, login, true))
        }
    }
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: string) => {
    return async (dispatch: Dispatch<ActionsTypes>) => {
        const response = await authApi.login(email, password, rememberMe, captcha)
        if (response.data.resultCode === 0) {
            dispatch(getAuthUserData())
        } else {
            if (response.data.resultCode === 10) {
                dispatch(getCaptchaUrl())
            }
            let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
            dispatch(stopSubmit("Login", {_error: message}))
        }
    }
}

export const logout = () => {
    return async (dispatch: Dispatch<ActionsTypes>) => {
        const response = await authApi.logout()
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false))
        }
    }
}

export const getCaptchaUrl = () => {
    return async (dispatch: Dispatch<ActionsTypes>) => {
        const response = await securityAPI.getCaptchaUrl()
        const captchaUrl = response.data.url
            dispatch(setCaptchaUrl(captchaUrl))
    }
}


export default authReducer;