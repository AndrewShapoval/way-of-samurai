import {ActionsTypes} from "./store";

export type initialStateType = {
    users: Array<UserType>
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
    users: [
        // {
        //     id: 1,
        //     followed: true,
        //     name: 'Andrew',
        //     status: 'Cool',
        //     location: {country: 'Russia', city: 'Moscow'},
        //     photos: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS7WTP-tHQOZbAbB0ZmTDrs7XX3qjexEsykECZ5K5iYrBxndlD3&usqp=CAU'
        // },
        // {
        //     id: 2,
        //     followed: false,
        //     name: 'Sasha',
        //     status: 'Cool too',
        //     location: {country: 'Belarus', city: 'Minsk'},
        //     photos: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS7WTP-tHQOZbAbB0ZmTDrs7XX3qjexEsykECZ5K5iYrBxndlD3&usqp=CAU'
        // },
        // {
        //     id: 3,
        //     followed: true,
        //     name: 'Tony',
        //     status: 'Cool too',
        //     location: {country: 'Ukraine', city: 'Kiev'},
        //     photos: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS7WTP-tHQOZbAbB0ZmTDrs7XX3qjexEsykECZ5K5iYrBxndlD3&usqp=CAU'
        // },
    ],
}

const usersReducer = (state = initialState, action: ActionsTypes) => {
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
                ...state, users: [...state.users, ...action.users]
            }
        default:
            return state
    }
}

export const followAC = (userId: number) => {
    return {
        type: 'FOLLOW',
        userId
    } as const
}

export const unFollowAC = (userId: number) => {
    return {
        type: 'UN_FOLLOW',
        userId
    } as const
}

export const setUsersAC = (users: Array<UserType>) => {
    return {
        type: 'SET_USERS',
        users
    } as const
}

export default usersReducer;