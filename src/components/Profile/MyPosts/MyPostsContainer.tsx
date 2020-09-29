import React from 'react';
import {addPost} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";


// const MyPostsContainer = (props: PropsType) => {
//
//     let state = props.store.getState()
//
//     let addPost = () => {
//         props.store.dispatch(addPostActionCreator(state.profilePage.newPostText))
//         props.store.dispatch(updateNewPostTextActionCreator(""))
//     }
//
//     let onPostChange = (text: string) => {
//         props.store.dispatch(updateNewPostTextActionCreator(text))
//     }
//
//     return (
//         <MyPosts onPostChange={onPostChange}
//                  addPost={addPost}
//                  posts={state.profilePage.posts}
//                  newPostText={state.profilePage.newPostText}/>
//     )
// }

const mapStateToProps = (state: AppStateType) => {
    return {
        profilePage: state.profilePage
    }
}

// const mapDispatchToProps = (dispatch: DispatchType) => {
//     return {
//         addPost: () => {
//             dispatch(addPostActionCreator())
//         },
//         onPostChange: (text: string) => {
//             dispatch(updateNewPostTextActionCreator(text))
//         }
//     }
// }

const MyPostsContainer = connect(mapStateToProps, {
    addPost
})(MyPosts)

export default MyPostsContainer;