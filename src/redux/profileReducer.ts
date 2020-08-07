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
            const newPost: PostType = {
                id: 3,
                message: action.postMessage,
                likesCount: 0
            }
            state.posts.push(newPost);
            return state;
        case "UPDATE-NEW-POST-TEXT":
            state.newPostText = action.newText;
            return state
        default:
            return state
    }
}

export const addPostActionCreator = (postMessage: string) => {
    return {
        type: 'ADD-POST',
        postMessage: postMessage
    } as const
}

export const updateNewPostTextActionCreator = (newText: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: newText
    } as const
}

export default profileReducer;