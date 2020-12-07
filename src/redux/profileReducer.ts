import {ActionsTypes, PostType, ProfilePageType} from "./store";
import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../api/api";

let initialState: ProfilePageType = {
    posts: [
        {id: 1, message: 'How are you', likesCount: 10},
        {id: 2, message: 'Well', likesCount: 23}
    ],
    profile: null,
    status: ""
}

const profileReducer = (state = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case "ADD-POST":
            let newPost: PostType = {
                id: 3,
                message: action.newPostText,
                likesCount: 0}
            return {...state, posts: [...state.posts, newPost],}
        case "SET_USER_PROFILE":
            return {...state, profile: action.profile}
        case "SET_STATUS":
            return {...state, status: action.status}
        case "SAVE_PHOTO_SUCCESS":
            return {...state, profile: {...state.profile, photos: action.photos}}
        default:
            return state
    }
}

export const addPost = (newPostText: string) => {
    debugger
    return {
        type: 'ADD-POST', newPostText
    } as const
}

export const setUserProfile = (profile: string) => {
    return {type: 'SET_USER_PROFILE', profile} as const
}

export const setStatus = (status: string) => {
    return {type: "SET_STATUS", status}
}

export const savePhotoSuccess = (photos: File) => {
    return {type: "SAVE_PHOTO_SUCCESS", photos}
}

export const getUserProfile = (userId: string) => {
    return async (dispatch: Dispatch<ActionsTypes>) => {
        let response = await usersAPI.getProfile(userId)
        dispatch(setUserProfile(response.data))
    }
}

export const getStatus = (userId: string) => {
    return async (dispatch: Dispatch<ActionsTypes>) => {
        let response = await profileAPI.getStatus(userId)
        dispatch(setStatus(response.data))
    }
}

export const updateStatus = (status: string) => {
    return async (dispatch: Dispatch<ActionsTypes>) => {
        let response = await profileAPI.updateStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status))
        }
    }
}

export const savePhoto = (file: File) => {
    return async (dispatch: Dispatch<ActionsTypes>) => {
        let response = await profileAPI.savePhoto(file)
        if (response.data.resultCode === 0) {
            dispatch(savePhotoSuccess(response.data.data.photos))
        }
    }
}


export default profileReducer;