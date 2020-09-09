import {ActionsTypes} from "./store";

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

let initialState: initialStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followIsProgress: []

}

const usersReducer = (state: initialStateType = initialState, action: ActionsTypes): initialStateType => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case 'UN_FOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case 'SET_USERS':
            return {
                ...state, users: action.users
            }
        case 'SET_CURRENT_PAGE':
            return {
                ...state, currentPage: action.currentPage
            }
        case "SET_TOTAL_USERS_COUNT":
            return {
                ...state, totalUsersCount: action.totalUsersCount
            }
        case "TOGGLE_IS_FETCHING":
            return {
                ...state, isFetching: action.isFetching
            }
        case "TOGGLE_IS_FOLLOWING_PROGRESS":
            return {
                ...state,
                followIsProgress: action.isFetching
                    ? [...state.followIsProgress, action.userId]
                    : state.followIsProgress.filter(id => id !== action.userId)
            }
        default:
            return state
    }
}

export const follow = (userId: number) => {
    return {type: 'FOLLOW', userId} as const
}

export const unFollow = (userId: number) => {
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


export default usersReducer;