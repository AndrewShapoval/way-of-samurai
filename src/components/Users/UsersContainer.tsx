import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    follow,
    setCurrentPage,
    setUsers,
    setTotalUsersCount, toggleIsFetching,
    unFollow,
    UserType, toggleFollowingProgress
} from "../../redux/usersReducer";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import {usersApi} from "../../api/api";

/*type PropsType = {
    users: Array<UserType>
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void
    followIsProgress: Array<number>
}*/


type MapStatePropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followIsProgress: Array<number>
}

type MapDispatchPropsType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void
}

class UsersContainer extends React.Component<MapStatePropsType & MapDispatchPropsType> {

    // constructor(props: PropsType) {
    //     super(props);
    //     debugger
    //     axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
    //         this.props.setUsers(response.data.items)
    //     })
    // }

    componentDidMount(): void {
        this.props.toggleIsFetching(true)
        usersApi.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        usersApi.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
            })
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   follow={this.props.follow}
                   unFollow={this.props.unFollow}
                   toggleFollowingProgress={this.props.toggleFollowingProgress}
                   followIsProgress={this.props.followIsProgress}/>
        </>
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followIsProgress: state.usersPage.followIsProgress
    }
}

export default connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, {
    follow,
    unFollow,
    setUsers,
    setCurrentPage,
    toggleIsFetching,
    setTotalUsersCount,
    toggleFollowingProgress
})(UsersContainer)