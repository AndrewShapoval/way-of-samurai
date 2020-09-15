import {ActionsTypes} from "./store";
import {Dispatch} from "redux";
import {authApi} from "../api/api";

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
        case 'SET_USER_DATA':
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state
    }
}

export const setAuthUserData = (id: number, email: string, login: string) => {
    return {
        type: 'SET_USER_DATA',
        data: {id, email, login}
    } as const
}

export const getAuthUserData = () => {
    return (dispatch: Dispatch<ActionsTypes>) => {
        authApi.me().then(response => {
            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data
                dispatch(setAuthUserData(id, email, login))
            }
        })
    }
}


export default authReducer;