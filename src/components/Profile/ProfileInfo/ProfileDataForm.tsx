import React from 'react';
import {createField, Input, TextArea} from "../../common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";
import styles from "./ProfileInfo.module.css"

const ProfileDataForm = ({handleSubmit, initialValues, error}: any) => {
    return (
        <form onSubmit={handleSubmit}>
            <div><button onClick={() => {}}>Save</button></div>
            {error && <div className={styles.error}>{error}</div>}
            <div><b>Full name: </b> {createField("Full name", "fullName", [], Input)}</div>
            <div>
                <b>About Me: </b>
                {createField("About me", "aboutMe", [], TextArea)}
            </div>
            <div>
                <b>Looking for a job: </b>
                {createField("", "lookingForAJob", [], Input, {type: "checkbox"})}
            </div>
            <div>
                <b>Skills: </b>
                {createField("My professional skills", "lookingForAJobDescription", [], TextArea)}
            </div>
            <div><b>Contacts: </b> {Object.keys(initialValues.contacts).map(key =>
                <div key={key}><b>{key}: {createField(key, "contacts." + key, [], Input)}</b></div>)}
            </div>
        </form>
    )
}

const ProfileDataFormReduxForm = reduxForm<any>({form: "edit-profile"})(ProfileDataForm)

export default ProfileDataFormReduxForm

