import {ActionsTypes, DialogsPageType, MessageType} from "./store";

let initialState: DialogsPageType = {
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

const dialogsReducer = (state = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case "ADD-MESSAGE": {
            const newMessage: MessageType = {
                id: 4,
                message: state.newMessageText
            }
            let copyState = {...state}
            copyState.messages = [...state.messages]
            copyState.messages.push(newMessage)
            copyState.newMessageText = ""
            return copyState;
        }
        case "UPDATE-NEW-MESSAGE-TEXT": {
            let copyState = {...state}
            copyState.newMessageText = action.newMessage;
            return copyState;
        }
        default:
            return state
    }
}

export const addMessageAC = () => {
    return {
        type: 'ADD-MESSAGE',
    } as const
}

export const updateNewMessageTextActionCreator = (newMessage: string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE-TEXT',
        newMessage: newMessage
    } as const
}

export default dialogsReducer;