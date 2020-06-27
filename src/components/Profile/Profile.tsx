import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src='https://cdn.pixabay.com/photo/2015/08/27/09/22/banner-909710_1280.jpg'/>
            </div>
            <div>
                Ava + discription
            </div>
            <MyPosts/>
        </div>
    )
}

export default Profile;