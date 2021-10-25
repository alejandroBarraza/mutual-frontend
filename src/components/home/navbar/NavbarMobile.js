import React, { useState } from 'react';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import MenuOpenRoundedIcon from '@mui/icons-material/MenuOpenRounded';

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
                    <img src='./mutual-svg.svg' alt='logo-mutual' />
                </div>
                <div onClick={handleClick}>
                    {navClicked ? (
                        <MenuRoundedIcon style={{ cursor: 'pointer' }} />
                    ) : (
                        <MenuOpenRoundedIcon style={{ cursor: 'pointer' }} />
                    )}
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
