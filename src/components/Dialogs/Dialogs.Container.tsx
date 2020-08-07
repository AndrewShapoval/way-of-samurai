import React from 'react';
import {StoreType} from "../../redux/store";
import {addMessageAC, updateNewMessageTextActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

type PropsType = {
    store: StoreType
}

const DialogsContainer = (props: PropsType) => {

    let state = props.store.getState()

    let addMessage = () => {
        props.store.dispatch(addMessageAC(state.dialogsPage.newMessageText))
        props.store.dispatch(updateNewMessageTextActionCreator(""))
    }

    let onChangeMessage = (text: string) => {
        props.store.dispatch(updateNewMessageTextActionCreator(text))
    }

    return (
        <Dialogs addMessage={addMessage}
                 onChangeMessage={onChangeMessage}
                 dialogs={state.dialogsPage.dialogs}
                 messages={state.dialogsPage.messages}
                 newMessageText={state.dialogsPage.newMessageText}/>
    )
}

export default DialogsContainer;