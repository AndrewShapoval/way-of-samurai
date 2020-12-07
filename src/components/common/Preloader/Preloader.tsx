import React from "react";
import preloader from "../../../assets/images/preloader.svg";

export const Preloader = () => {
    return (
        <div style={{backgroundColor: "white", position: "absolute"}}>
            <img src={preloader}/>
        </div>
    )
}