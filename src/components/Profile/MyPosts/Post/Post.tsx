import React from 'react';
import s from './Post.module.css'

type MessageType = {
    message: string;
    likesCount: number;
}

const Post: React.FC<MessageType> = (props) => {
    return (
        <div className={s.item}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS7WTP-tHQOZbAbB0ZmTDrs7XX3qjexEsykECZ5K5iYrBxndlD3&usqp=CAU"/>
            {props.message}
            <div>
                <span>Like {props.likesCount}</span>
            </div>
        </div>
    )
}

export default Post;