import {ActionsTypes, PostType, ProfilePageType} from "./store";
import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../api/api";

let initialState: ProfilePageType = {
    posts: [
        {id: 1, message: 'How are you', likesCount: 10},
        {id: 2, message: 'Well', likesCount: 23}
    ],
    newPostText: '',
    profile: null,
    status: ""
}

const profileReducer = (state = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case "ADD-POST":
            let newPost: PostType = {
                id: 3,
                message: state.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ""
            }
        case "UPDATE-NEW-POST-TEXT":
            return {
                ...state,
                newPostText: action.newText
            }
        case "SET_USER_PROFILE":
            return {
                ...state, profile: action.profile
            }
        case "SET_STATUS":
            return {
                ...state,
                status: action.status
            }
        default:
            return state
    }
}

export const addPost = () => {
    return {
        type: 'ADD-POST',
    } as const
}

export const onPostChange = (newText: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: newText
    } as const
}

export const setUserProfile = (profile: string) => {
    return {type: 'SET_USER_PROFILE', profile} as const
}

export const setStatus = (status: string) => {
    return {type: "SET_STATUS", status}
}

export const getUserProfile = (userId: string) => {
    return (dispatch: Dispatch<ActionsTypes>) => {
        usersAPI.getProfile(userId).then(response => {
            dispatch(setUserProfile(response.data))
        })
    }
}

export const getStatus = (userId: string) => {
    return (dispatch: Dispatch<ActionsTypes>) => {
        profileAPI.getStatus(userId).then(responce => {
            dispatch(setStatus(responce.data))
        })
    }
}

export const updateStatus = (status: string) => {
    return (dispatch: Dispatch<ActionsTypes>) => {
        profileAPI.updateStatus(status)
            .then(responce => {
                if (responce.data.resultCode === 0) {
                    dispatch(setStatus(status))
                }
            })
    }
}


export default profileReducer;