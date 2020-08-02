import {ActionsTypes, DialogsPageType, MessageType} from "./state";

const dialogsReducer = (state: DialogsPageType, action: ActionsTypes) => {
    switch (action.type) {
        case "ADD-MESSAGE":
            const newMessage: MessageType = {
                id: 4,
                message: action.Message
            }
            state.messages.push(newMessage);
            return state;
        case "UPDATE-NEW-MESSAGE-TEXT":
            state.newMessageText = action.newMessage;
            return state;
        default:
            return state
    }
}

export const addMessageAC = (Message: string) => {
    return {
        type: 'ADD-MESSAGE',
        Message: Message
    } as const
}

export const updateNewMessageTextActionCreator = (newMessage: string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE-TEXT',
        newMessage: newMessage
    } as const
}

export default dialogsReducer;