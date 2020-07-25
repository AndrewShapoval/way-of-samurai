let rerenderEntireTree = () => {

}

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

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

let state: RootStateType = {
    profilePage: {
        posts: [
            {id: 1, message: 'How are you', likesCount: 10},
            {id: 2, message: 'Well', likesCount: 23}
        ],
        newPostText: ''
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: "Andrew"},
            {id: 2, name: "Sveta"},
            {id: 3, name: "Serg"},
            {id: 4, name: "Alecs"},
            {id: 5, name: "Tony"}
        ],
        messages: [
            {id: 1, message: "Hi!!!"},
            {id: 2, message: "How are you???"},
            {id: 3, message: "Cool!!!"}
        ],
        newMessageText: ""
    }
}

export const addPost = (postMessage: string) => {
    const newPost: PostType = {
        id: 3,
        message: postMessage,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost)
    rerenderEntireTree()
}

export const updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree()
}

export const addMessage = (Message: string) => {
    const newMessage: MessageType = {
        id: 4,
        message: Message
    }
    state.dialogsPage.messages.push(newMessage)
    rerenderEntireTree()
}

export const updateNewMessage = (newMessage: string) => {
    state.dialogsPage.newMessageText = newMessage
    rerenderEntireTree()
}

export const subscribe = (callback: () => void) => {
    rerenderEntireTree = callback
}

export default state;