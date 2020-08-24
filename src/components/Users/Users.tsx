import React from "react";
import styles from "./users.module.css";
import {UserType} from "../../redux/usersReducer";
import axios from "axios"
import userPhoto from "../../../src/assets/images/noName.png"

type PropsType = {
    users: Array<UserType>
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
}


const Users = (props: PropsType) => {
    const getUsers = () => {
        if (props.users.length === 0) {
            debugger
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                props.setUsers(response.data.items)
            })
        }
    }

    return (
        <div>
            <button onClick={getUsers}>Get users</button>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto}
                                 className={styles.userPhoto}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => props.unFollow(u.id)}>Un follow</button>
                                : <button onClick={() => props.follow(u.id)}>Follow</button>}
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

export default Users
