import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPageType} from "../../redux/store";

type PropsType = {
    dialogsPage: DialogsPageType
    addMessage: () => void
    onChangeMessage: (text: string) => void
}

const Dialogs = (props: PropsType) => {

    let state = props.dialogsPage

    let dialogsElement = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElement = state.messages.map(m => <Message message={m.message}/>)
    let addMessage = () => {
        props.addMessage()
    }

    let onChangeMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.onChangeMessage(e.currentTarget.value)
    }
    debugger

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
                    <textarea value={state.newMessageText} onChange={onChangeMessage}/>
                </div>
                <div>
                    <button onClick={addMessage}>Add</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;