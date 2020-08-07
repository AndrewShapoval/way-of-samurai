import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {StoreType} from "../../../redux/store";

type PropsType = {
    store: StoreType
}


const MyPostsContainer = (props: PropsType) => {

    let state = props.store.getState()

    let addPost = () => {
        props.store.dispatch(addPostActionCreator(state.profilePage.newPostText))
        props.store.dispatch(updateNewPostTextActionCreator(""))
    }

    let onPostChange = (text: string) => {
        props.store.dispatch(updateNewPostTextActionCreator(text))
    }

    return (
        <MyPosts onPostChange={onPostChange}
                 addPost={addPost}
                 posts={state.profilePage.posts}
                 newPostText={state.profilePage.newPostText}/>
    )
}

export default MyPostsContainer;