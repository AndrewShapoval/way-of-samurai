import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPageType} from "../../redux/store";
import {Redirect} from 'react-router-dom';
import {reduxForm, Field, InjectedFormProps} from "redux-form";

type PropsType = {
    dialogsPage: DialogsPageType
    addMessage: (values: string) => void
    isAuth: boolean
}

type FormDataType = {
    newMessageText: string
}

const Dialogs = (props: PropsType) => {

    let state = props.dialogsPage

    let dialogsElement = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);
    let messagesElement = state.messages.map(m => <Message message={m.message} key={m.id}/>)
    let addNewMessage = (values: FormDataType) => {
        props.addMessage(values.newMessageText)
    }

    if (!props.isAuth) return <Redirect to={"/Login"}/>

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                <div>
                    {messagesElement}
                </div>
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}

const AddMessageForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component="textarea" name="newMessageText" placeholder="Enter your message"/>
            </div>
            <div>
                <button>Add</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm<FormDataType>({form: "dialogAddMessageForm"}) (AddMessageForm)

export default Dialogs;