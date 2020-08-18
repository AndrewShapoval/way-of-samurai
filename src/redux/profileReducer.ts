import {ActionsTypes, PostType, ProfilePageType} from "./store";

let initialState: ProfilePageType = {
    posts: [
        {id: 1, message: 'How are you', likesCount: 10},
        {id: 2, message: 'Well', likesCount: 23}
    ],
    newPostText: ''
}

const profileReducer = (state = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case "ADD-POST":
            let newPost: PostType = {
                id: 3,
                message: state.newPostText,
                likesCount: 0
            }
            return  {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ""
            }
        case "UPDATE-NEW-POST-TEXT":
            return  {
                ...state,
                newPostText: action.newText
            }
        default:
            return state
    }
}

export const addPostActionCreator = () => {
    return {
        type: 'ADD-POST',
    } as const
}

export const updateNewPostTextActionCreator = (newText: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: newText
    } as const
}

export default profileReducer;