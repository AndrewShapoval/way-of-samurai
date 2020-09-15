import React from 'react';
import {addMessage, onChangeMessage} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";

const mapStateToProps = (state: AppStateType) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}


const DialogsContainer = connect(mapStateToProps, {
    addMessage,
    onChangeMessage
})(Dialogs);

export default DialogsContainer;