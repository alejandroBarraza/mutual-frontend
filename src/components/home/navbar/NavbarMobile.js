import React, { useState } from 'react';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import MenuOpenRoundedIcon from '@material-ui/icons/MenuOpenRounded';
import '../../../container.css';
import './NavbarMobile.css';
import { NavbarItem } from './NavbarItem';
export const NavbarMobile = () => {
    const [navClicked, setnavClicked] = useState(!false);
    const handleClick = () => setnavClicked(!navClicked);

    return (
        <div className='wrapper-mobile'>
            <nav className=' navbar-mobile container'>
                <div className='logo-mobile'>
                    <img src='./logo-verde.jpg' alt='logo-mutual' />
                </div>
                <div onClick={handleClick}>
                    {navClicked ? <MenuRoundedIcon /> : <MenuOpenRoundedIcon />}
                </div>
            </nav>
            <ul className={navClicked ? 'navbar-mobile-menu' : 'navbar-mobile-menu active'}>
                {NavbarItem.map((item, index) => (
                    <li key={index}>
                        <a href={item.url}>{item.title}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};
