import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profileReducer";
import {AppStateType} from "../../redux/redux-store";
import {withRouter, Redirect} from "react-router-dom";
import {RouteComponentProps} from "react-router";

type PathUserIdType = {
    userId: string
}

type MapStateToPropsType = {
    profile: any
    isAuth: boolean
}

type MapDispatchToPropsType = {
    getUserProfile: (userId: string) => void
}

type OwnPropsType = MapStateToPropsType & MapDispatchToPropsType

type PropsType = RouteComponentProps<PathUserIdType> & OwnPropsType


class ProfileContainer extends React.Component<PropsType> {

    componentDidMount(): void {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = "2"
        }
        this.props.getUserProfile(userId)
    }

    render() {
        if (!this.props.isAuth) return <Redirect to={"/Login"}/>

        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent)
