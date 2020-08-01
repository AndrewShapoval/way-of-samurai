import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {ActionsTypes, addMessageAC, DialogType, MessageType, updateNewMessageTextActionCreator} from "../../redux/state";

type PropsType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageText: string
    dispatch: (action: ActionsTypes) => void
    // addMessage: (Message: string) => void
    // updateNewMessage: (newMessage: string) => void
}

const Dialogs = (props: PropsType) => {

    let dialogsElement = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElement = props.messages.map(m => <Message message={m.message}/>)
    let addMessage = () => {
        props.dispatch(addMessageAC(props.newMessageText))
        props.dispatch(updateNewMessageTextActionCreator(""))
        // props.dispatch({type: 'ADD-MESSAGE', Message: props.newMessageText})
        // props.dispatch({type: 'UPDATE-NEW-MESSAGE', newMessage: ""})
        // props.addMessage(props.newMessageText)
        // props.updateNewMessage("")
    }

    let onChangeMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updateNewMessageTextActionCreator(e.currentTarget.value))
        // props.dispatch({type: 'UPDATE-NEW-MESSAGE', newMessage: e.currentTarget.value})
        // props.updateNewMessage(e.currentTarget.value)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                <div>
                    {messagesElement}
                </div>
                <div>
                    <textarea value={props.newMessageText} onChange={onChangeMessage}/>
                </div>
                <div>
                    <button onClick={addMessage}>Add</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;