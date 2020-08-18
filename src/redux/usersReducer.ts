import {ActionsTypes} from "./store";

export type initialStateType = {
    users: Array<UserType>
}

export type UserType = {
    id: number
    followed: boolean
    fullName: string
    status: string
    location: locationType
    photoUrl: string
}

type locationType = {
    country: string
    city: string
}

let initialState: initialStateType = {
    users: [
        {
            id: 1,
            followed: true,
            fullName: 'Andrew',
            status: 'Cool',
            location: {country: 'Russia', city: 'Moscow'},
            photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS7WTP-tHQOZbAbB0ZmTDrs7XX3qjexEsykECZ5K5iYrBxndlD3&usqp=CAU'
        },
        {
            id: 2,
            followed: false,
            fullName: 'Sasha',
            status: 'Cool too',
            location: {country: 'Belarus', city: 'Minsk'},
            photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS7WTP-tHQOZbAbB0ZmTDrs7XX3qjexEsykECZ5K5iYrBxndlD3&usqp=CAU'
        },
        {
            id: 3,
            followed: true,
            fullName: 'Tony',
            status: 'Cool too',
            location: {country: 'Ukraine', city: 'Kiev'},
            photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS7WTP-tHQOZbAbB0ZmTDrs7XX3qjexEsykECZ5K5iYrBxndlD3&usqp=CAU'
        },
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

export default usersReducer;