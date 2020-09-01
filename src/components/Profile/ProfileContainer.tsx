import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profileReducer";
import {AppStateType} from "../../redux/redux-store";
import {withRouter} from "react-router-dom";
import {RouteComponentProps} from "react-router";

type PathUserIdType = {
    userId: string
}

type MapStateToPropsType = {
    profile: any
}

type MapDispatchToPropsType = {
    setUserProfile: (profile: any) => void
}

type OwnPropsType = MapStateToPropsType & MapDispatchToPropsType

type PropsType = RouteComponentProps<PathUserIdType> & OwnPropsType


class ProfileContainer extends React.Component<PropsType>{

    componentDidMount(): void {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = "2"
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile}) (WithUrlDataContainerComponent)
