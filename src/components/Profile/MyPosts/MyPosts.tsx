import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {ActionsTypes, addPostActionCreator, PostType, updateNewPostTextActionCreator} from "../../../redux/state";

type PropsType = {
    posts: Array<PostType>
    dispatch: (action: ActionsTypes) => void
    newPostText: string
    // updateNewPostText: (newText: string) => void
    // addPost: (postMessage: string)=> void
}



const MyPosts = (props: PropsType) => {

    let postsElement = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)
    let addPost = () => {
        // props.addPost(props.newPostText)
        // props.updateNewPostText("")
        // props.dispatch({type: 'ADD-POST', postMessage: props.newPostText})
        // props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: ""})
        props.dispatch(addPostActionCreator(props.newPostText))
        props.dispatch(updateNewPostTextActionCreator( ""))
    }

    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        // props.updateNewPostText(e.currentTarget.value)
        // props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: e.currentTarget.value})
        props.dispatch(updateNewPostTextActionCreator(e.currentTarget.value ))
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
}

export default MyPosts;