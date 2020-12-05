import {ActionsTypes} from "./store";
import {usersAPI} from "../api/api";
import {AppStateType} from "./redux-store";
import {Dispatch} from "redux";

let initialState: initialStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followIsProgress: []
}

const updateObjectInArray = (items: Array<UserType>, itemId: number, newObjProp: object) => {
    return items.map(u => {
        if (u.id === itemId) {
            return {...u, ...newObjProp}
        }
        return u
    })
}

const usersReducer = (state: initialStateType = initialState, action: ActionsTypes): initialStateType => {
    switch (action.type) {
        case 'FOLLOW':
            return {...state, users: updateObjectInArray(state.users, action.userId,{followed: true})}
        case 'UN_FOLLOW':
            return {...state, users: updateObjectInArray(state.users, action.userId,{followed: false})}
        case 'SET_USERS':
            return {...state, users: action.users}
        case 'SET_CURRENT_PAGE':
            return {...state, currentPage: action.currentPage}
        case "SET_TOTAL_USERS_COUNT":
            return {...state, totalUsersCount: action.totalUsersCount}
        case "TOGGLE_IS_FETCHING":
            return {...state, isFetching: action.isFetching}
        case "TOGGLE_IS_FOLLOWING_PROGRESS":
            return {
                ...state, followIsProgress: action.isFetching
                    ? [...state.followIsProgress, action.userId]
                    : state.followIsProgress.filter(id => id !== action.userId)
            }
        default:
            return state
    }
}

export const followSuccess = (userId: number) => {
    return {type: 'FOLLOW', userId} as const
}

export const unFollowSuccess = (userId: number) => {
    return {type: 'UN_FOLLOW', userId} as const
}

export const setUsers = (users: Array<UserType>) => {
    return {type: 'SET_USERS', users} as const
}

export const setCurrentPage = (pageNumber: number) => {
    return {type: 'SET_CURRENT_PAGE', currentPage: pageNumber} as const
}

export const setTotalUsersCount = (totalUsersCount: number) => {
    return {type: 'SET_TOTAL_USERS_COUNT', totalUsersCount} as const
}

export const toggleIsFetching = (isFetching: boolean) => {
    return {type: 'TOGGLE_IS_FETCHING', isFetching} as const
}

export const toggleFollowingProgress = (isFetching: boolean, userId: number) => {
    return {type: 'TOGGLE_IS_FOLLOWING_PROGRESS', isFetching, userId} as const
}

export const requestUsers = (page: number, pageSize: number) => {
    return async (dispatch: Dispatch<ActionsTypes>, getState: () => AppStateType) => {
        dispatch(toggleIsFetching(true))
        dispatch(setCurrentPage(page))
        let data = await usersAPI.getUsers(page, pageSize)
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(data.items))
        dispatch(setTotalUsersCount(data.totalCount))
    }
}

const followUnFollowFlow = async (dispatch: Dispatch<ActionsTypes>, userId: number, apiMethod: any, actionCreator: any) => {
    dispatch(toggleFollowingProgress(true, userId))
    let response = await apiMethod(userId)
    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleFollowingProgress(false, userId))
}

export const follow = (userId: number): any => {
    return async (dispatch: Dispatch<ActionsTypes>) => {
        let apiMethod = usersAPI.postFollow.bind(usersAPI)
        followUnFollowFlow(dispatch, userId, apiMethod, followSuccess)
    }
}

export const unFollow = (userId: number): any => {
    return async (dispatch: Dispatch<ActionsTypes>) => {
        let apiMethod = usersAPI.deleteUnFollow.bind(usersAPI)
        followUnFollowFlow(dispatch, userId, apiMethod, unFollowSuccess)
    }
}

export type initialStateType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followIsProgress: Array<number>
}

export type UserType = {
    id: number
    followed: boolean
    name: string
    status: string
    location: locationType
    photos: any
}

type locationType = {
    country: string
    city: string
}

export default usersReducer;