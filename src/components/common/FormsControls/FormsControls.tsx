import React from "react";
import styles from "./FormsControls.module.css"

type FormsControlType = {
    input: any
    meta: any
}

const FormControl: React.FC<FormsControlType> = ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error

    return (
        <div className={`${styles.formControl} ${hasError ? styles.error : ""}`}>
            <div>
                {props.children}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const TextArea: React.FC<FormsControlType> = (props) => {

    const {input, meta, ...restProps} = props

    return (
        <FormControl {...props}>
            <textarea {...input} {...restProps} />
        </FormControl>
    )
}

export const Input: React.FC<FormsControlType> = (props) => {

    const {input, meta, ...restProps} = props

    return (
        <FormControl {...props}>
            <input {...input} {...restProps} />
        </FormControl>
    )
}
