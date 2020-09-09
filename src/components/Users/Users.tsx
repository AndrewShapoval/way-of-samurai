import React from "react";
import styles from "./users.module.css";
import {UserType} from "../../redux/usersReducer";
import userPhoto from "../../../src/assets/images/noName.png"
import {NavLink} from "react-router-dom";
import {usersApi} from "../../api/api";

type PropsUsersType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    users: Array<UserType>
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void
    followIsProgress: Array<number>

}

export let Users = (props: PropsUsersType) => {

    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span className={props.currentPage === p ? styles.selectedPage : ""}
                                 onClick={() => {
                                     props.onPageChanged(p)
                                 }}>{p}</span>
                })}
            </div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                           <NavLink to={"/profile" + u.id}>
                               <img src={u.photos.small != null ? u.photos.small : userPhoto}
                                    className={styles.userPhoto}/>
                           </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button disabled={props.followIsProgress.some((id) => id === u.id)} onClick={() => {
                                    props.toggleFollowingProgress(true, u.id)
                                    usersApi.deleteUnFollow(u.id)
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.unFollow(u.id)
                                            }
                                            props.toggleFollowingProgress(false, u.id)
                                        })
                                }}>Un follow</button>
                                : <button disabled={props.followIsProgress.some((id) => id === u.id)} onClick={() => {
                                    props.toggleFollowingProgress(true, u.id)
                                    usersApi.postFollow(u.id)
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.follow(u.id)
                                            }
                                            props.toggleFollowingProgress(false, u.id)
                                        })
                                }}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}

