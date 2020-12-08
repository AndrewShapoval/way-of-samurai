import React, {ChangeEvent, useState} from 'react';
import s from './ProfileInfo.module.css'
import {Preloader} from "../../common/Preloader/Preloader";
import userPhoto from "../../../assets/images/noName.png"
import {ProfileStatus} from "./ProfileStatus";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = (props: PropsType) => {

    const [editMode, setEditMode] = useState<boolean>(false)

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
                {editMode
                    ? <ProfileDataForm/>
                    : <ProfileData profile={props.profile}
                                   isOwner={props.isOwner}
                                   goToEditMode={() => setEditMode(true)}/>}
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    )
}

const ProfileData = ({profile, isOwner, goToEditMode}: any) => {
    return (
        <div>
            {isOwner && <div><button onClick={goToEditMode}>Edit</button></div>}
            <div><b>Full name: </b> {profile.fullName}</div>
            <div><b>About Me: </b> {profile.aboutMe}</div>
            <div><b>Looking for a job: </b> {profile.lookingForAJob ? "Yes" : "No"}</div>
            <div><b>Skills: </b> {profile.lookingForAJobDescription}</div>
            <div><b>Contacts:</b> {Object.keys(profile.contacts).map(key =>
                <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
            )}</div>
        </div>
    )
}

export const Contact = ({contactTitle, contactValue}: any) => {
    return (
        <div className={s.contact}><b>{contactTitle}:</b>{contactValue}</div>
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