import React from 'react';
import s from './ProfileInfo.module.css'
import {Preloader} from "../../common/Preloader/Preloader";

type PropsType = {
    profile: any
}

const ProfileInfo = (props: PropsType) => {

    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div className={s.wrapper}>
                <img src='https://cdn.pixabay.com/photo/2015/08/27/09/22/banner-909710_1280.jpg'/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                Ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;