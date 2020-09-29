import React from 'react';
import {addMessage} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {compose} from "redux";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";

const mapStateToProps = (state: AppStateType) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}

export default compose(
    WithAuthRedirect,
    connect(mapStateToProps, {addMessage}),
)(Dialogs)

// const DialogsContainer = connect(mapStateToProps, {
//     addMessage,
//     onChangeMessage
// })(Dialogs);
//
// export default DialogsContainer;