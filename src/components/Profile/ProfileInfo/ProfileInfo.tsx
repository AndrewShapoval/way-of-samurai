import React from 'react';
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src='https://cdn.pixabay.com/photo/2015/08/27/09/22/banner-909710_1280.jpg'/>
            </div>
            <div className={s.descriptionBlock}>
                Ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;