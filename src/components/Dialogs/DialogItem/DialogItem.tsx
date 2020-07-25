import React from 'react';
import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";

type PropsType = {
    id: number
    name: string
}

const DialogItem = (props: PropsType) => {
    return (
        <div className={s.dialog}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS7WTP-tHQOZbAbB0ZmTDrs7XX3qjexEsykECZ5K5iYrBxndlD3&usqp=CAU"/>
            <NavLink to={"/dialogs/" + props.id} activeClassName={s.active}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;