import {addPostActionCreator, updateNewPostTextActionCreator} from "./profileReducer";
import {addMessageAC, updateNewMessageTextActionCreator} from "./dialogsReducer";
import {followAC, setUsersAC, unFollowAC} from "./usersReducer";

export type PostType = {
    id: number
    message: string
    likesCount: number
}

export type DialogType = {
    id: number
    name: string
}

export type MessageType = {
    id: number
    message: string
}

export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}

export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageText: string
}

// export type RootStateType = {
//     profilePage: ProfilePageType
//     dialogsPage: DialogsPageType
// }

export type ActionsTypes =
    ReturnType<typeof addPostActionCreator> |
    ReturnType<typeof updateNewPostTextActionCreator> |
    ReturnType<typeof addMessageAC> |
    ReturnType<typeof updateNewMessageTextActionCreator> |
    ReturnType<typeof followAC> |
    ReturnType<typeof unFollowAC> |
    ReturnType<typeof setUsersAC>


// export type StoreType = {
//     _state: RootStateType
//     _callSubscriber: () => void
//     getState: () => RootStateType
//     subscribe: (callback: () => void) => void
//     dispatch: (action: ActionsTypes) => void
// }

// let store: StoreType = {
//     _state: {
//         profilePage: {
//             posts: [
//                 {id: 1, message: 'How are you', likesCount: 10},
//                 {id: 2, message: 'Well', likesCount: 23}
//             ],
//             newPostText: ''
//         },
//         dialogsPage: {
//             dialogs: [
//                 {id: 1, name: "Andrew"},
//                 {id: 2, name: "Sveta"},
//                 {id: 3, name: "Serg"},
//                 {id: 4, name: "Alecs"},
//                 {id: 5, name: "Tony"}
//             ],
//             messages: [
//                 {id: 1, message: "Hi!!!"},
//                 {id: 2, message: "How are you???"},
//                 {id: 3, message: "Cool!!!"}
//             ],
//             newMessageText: ""
//         }
//     },
//     _callSubscriber() {
//         console.log('state changed')
//     },
//
//     getState() {
//         return this._state
//     },
//     subscribe(callback) {
//         this._callSubscriber = callback
//     },
//
//     dispatch(action) {
//         this._state.profilePage = profileReducer(this._state.profilePage, action)
//         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
//         this._callSubscriber()
//     },
// }

// export default store;