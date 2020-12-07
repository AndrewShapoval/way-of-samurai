import React, {ChangeEvent} from 'react';
import s from './ProfileInfo.module.css'
import {Preloader} from "../../common/Preloader/Preloader";
import userPhoto from "../../../assets/images/noName.png"
import {ProfileStatus} from "./ProfileStatus";

const ProfileInfo = (props: PropsType) => {

    if (!props.profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            props.savePhoto(e.target.files[0])
        }
    }

    return (
        <div>
            {props.isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large || userPhoto}/>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    )
}

export default ProfileInfo;

type PropsType = {
    profile: any
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (e: File) => void
}