import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {ActionsTypes, DialogType, MessageType} from "../../redux/store";
import {addMessageAC, updateNewMessageTextActionCreator} from "../../redux/dialogsReducer";

type PropsType = {
    addMessage: () => void
    onChangeMessage: (text: string) => void
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageText: string
}

const Dialogs = (props: PropsType) => {

    let dialogsElement = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElement = props.messages.map(m => <Message message={m.message}/>)
    let addMessage = () => {
        props.addMessage()
    }

    let onChangeMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.onChangeMessage(e.currentTarget.value)
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