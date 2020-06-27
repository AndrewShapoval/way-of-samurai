import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {


    return (
        <div>
            My posts
            <div>
                <textarea/>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                <Post message='How are you' likesCount={10}/>
                <Post message='Well' likesCount={23}/>
            </div>
        </div>
    )
}

export default MyPosts;