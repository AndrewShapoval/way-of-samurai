import React from 'react';
import s from './Header.module.css'

const Header = () => {
    return (
        <header className={s.header}>
            <img
                src='https://cdn.pixabay.com/photo/2015/09/17/10/30/banner-943866__340.jpg'/>
        </header>
    )
}

export default Header;