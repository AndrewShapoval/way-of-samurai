import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {AppStateType, DispatchType} from "../../redux/redux-store";
import {followAC, setUsersAC, unFollowAC, UserType} from "../../redux/usersReducer";

const mapStateToProps = (state: AppStateType) => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch: DispatchType) => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unFollow: (userId: number) => {
            dispatch(unFollowAC(userId))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer