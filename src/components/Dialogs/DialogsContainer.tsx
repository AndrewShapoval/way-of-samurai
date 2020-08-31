import React from 'react';
import {addMessage, onChangeMessage} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";

// type PropsType = {
//     store: StoreType
// }

// const DialogsContainer = (props: PropsType) => {
//
//     let state = props.store.getState()
//
//     let addMessage = () => {
//         props.store.dispatch(addMessageAC(state.dialogsPage.newMessageText))
//         props.store.dispatch(updateNewMessageTextActionCreator(""))
//     }
//
//     let onChangeMessage = (text: string) => {
//         props.store.dispatch(updateNewMessageTextActionCreator(text))
//     }
//
//     return (
//         <Dialogs addMessage={addMessage}
//                  onChangeMessage={onChangeMessage}
//                  dialogs={state.dialogsPage.dialogs}
//                  messages={state.dialogsPage.messages}
//                  newMessageText={state.dialogsPage.newMessageText}/>
//     )
// }

const mapStateToProps = (state: AppStateType) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

// const mapDispatchToProps = (dispatch: DispatchType) => {
//     return {
//         addMessage: () => {
//             dispatch(addMessageAC())
//         },
//         onChangeMessage: (text: string) => {
//             dispatch(updateNewMessageTextActionCreator(text))
//         }
//     }
// }

const DialogsContainer = connect(mapStateToProps, {
    addMessage,
    onChangeMessage
})(Dialogs);

export default DialogsContainer;