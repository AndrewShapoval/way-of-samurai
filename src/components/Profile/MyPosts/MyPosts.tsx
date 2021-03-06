import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {ProfilePageType} from "../../../redux/store";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {TextArea} from "../../common/FormsControls/FormsControls";

type PropsType = {
    profilePage: ProfilePageType
    addPost: (values: string) => void
}

type FormDataType = {
    NewPostText: string
}


const MyPosts = (props: PropsType) => {

    let state = props.profilePage

    let postsElement = state.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)
    let addPost = (values: FormDataType) => {
        props.addPost(values.NewPostText)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostFormRedux onSubmit={addPost}/>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
}

const maxLength10 = maxLengthCreator(10)

const AddNewPostForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="NewPostText" component={TextArea} placeholder="Post message"
                       validate={[required, maxLength10]}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddNewPostFormRedux = reduxForm<FormDataType>({form: "ProfileAddNewPostForm"})(AddNewPostForm)

export default MyPosts;