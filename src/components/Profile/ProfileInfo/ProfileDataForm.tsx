import React from 'react';
import {createField, Input} from "../../common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";

const ProfileDataForm = (props: any) => {
    return (
        <form onSubmit={()=> {}}>
            <div><button onClick={() => {}}>Save</button></div>
            <div><b>Full name: </b> {createField("Full name", "fullName", [], Input)}</div>
            <div><b>About Me: </b> </div>
            <div><b>Looking for a job: </b> </div>
            <div><b>Skills: </b> </div>
        </form>
    )
}

const ProfileDataFormReduxForm = reduxForm<any>({form: "edit-profile"})(ProfileDataForm)

export default ProfileDataFormReduxForm

