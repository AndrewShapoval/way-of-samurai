import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../../src/assets/images/noName.png"
import {NavLink} from "react-router-dom";
import {UserType} from "../../redux/usersReducer";
import {Paginator} from "../common/Paginator/Paginator";

type PropsUsersType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    users: Array<UserType>
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    followIsProgress: Array<number>

}

export let Users = (props: PropsUsersType) => {
    return (
        <div>
            <Paginator totalUsersCount={props.totalUsersCount} pageSize={props.pageSize}
                       currentPage={props.currentPage} onPageChanged={props.onPageChanged}/>
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
                                ? <button disabled={props.followIsProgress.some((id) => id === u.id)}
                                          onClick={() => {
                                              props.unFollow(u.id)
                                          }}>Un follow</button>
                                : <button disabled={props.followIsProgress.some((id) => id === u.id)}
                                          onClick={() => {
                                              props.follow(u.id)
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

