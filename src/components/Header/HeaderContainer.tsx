import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserData} from "../../redux/authReducer";
import {AppStateType} from "../../redux/redux-store";

type MapDispatchPropsType = {
    getAuthUserData: () => void
}

type MapStatePropsType = {
    isAuth: boolean
    login: string | null
}

class HeaderContainer extends React.Component<MapDispatchPropsType & MapStatePropsType> {
    componentDidMount(): void {
        this.props.getAuthUserData()
    }

    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export default connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(
    mapStateToProps, {getAuthUserData})(HeaderContainer);