import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

// type PropsType = {
//     isAuth: boolean
//     login: string
// }

const Header = (props: any) => {
    return (
        <header className={s.header}>
            {/*<img src='https://cdn.pixabay.com/photo/2015/09/17/10/30/banner-943866__340.jpg'/>*/}
                <div className={s.loginBlock}>
                    {props.isAuth
                        ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
                        : <NavLink to={'/login'}>Login</NavLink>}
                </div>

        </header>
    )
}

export default Header;