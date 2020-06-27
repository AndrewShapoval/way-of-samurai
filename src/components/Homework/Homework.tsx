import React from 'react';

import d from './Homework.module.css'

type MessageNameType = {
    message: string;
    name: string;
}

const Homework: React.FC<MessageNameType> = (props) => {
    return (
        <div className={d.dialogs}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS7WTP-tHQOZbAbB0ZmTDrs7XX3qjexEsykECZ5K5iYrBxndlD3&usqp=CAU'/>
            <div className={d.name}>{props.name}</div>
            <div className={d.message}>{props.message}</div>
            <div className={d.time}>9:00 PM</div>
        </div>
    )
}

export default Homework;