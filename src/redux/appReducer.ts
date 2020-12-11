import {ActionsTypes} from "./store";
import {Dispatch} from "redux";
import {getAuthUserData} from "./authReducer";

type initialStateType = {
    initialized: boolean
    appErrorMessage: any
}

let initialState: initialStateType = {
    initialized: false,
    appErrorMessage: null
}

const appReducer = (state: initialStateType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case "INITIALIZED_SUCCESS":
            return {
                ...state, initialized: true
            }
        case "SET_APP_ERROR":
            return {...state, appErrorMessage: action.error}
        default:
            return state
    }
}

export const initializedSuccess = () => ({type: "INITIALIZED_SUCCESS"} as const)
export const setAppError = (error: any) => ({type: "SET_APP_ERROR", error} as const)

export const initializeApp = () => {
    return (dispatch: ActionsTypes) => {
        let promise = dispatch(getAuthUserData())
        Promise.all([promise])
            .then(() => {
                dispatch(initializedSuccess())
            })
    }
}

export default appReducer