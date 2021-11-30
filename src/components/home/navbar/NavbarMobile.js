import React, { useState } from 'react';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import MenuOpenRoundedIcon from '@mui/icons-material/MenuOpenRounded';
import { Link as Lonk, animateScroll as scroll } from "react-scroll";
import '../../../container.css';
import './NavbarMobile.css';
import { NavbarItem } from './NavbarItem';
import { Link } from 'react-router-dom';
export const NavbarMobile = () => {
    const [navClicked, setnavClicked] = useState(!false);
    const handleClick = () => setnavClicked(!navClicked);

    return (
        <div className='wrapper-mobile'>
            <nav className=' navbar-mobile container'>
                <div className='logo-mobile'>
                    <Link className='link' to='/'>
                        <img className='image' src='/mutual-svg.svg' alt='logo-mutual' onClick={() => { setnavClicked(true) }} />
                    </Link>
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
                        {item.section != null ?
                            <Lonk
                                activeClass="active"
                                to={item.section}
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                onClick={handleClick}>
                                <a href={item.url}>{item.title}</a>
                            </Lonk> :
                            <a href={item.url}>{item.title}</a>
                        }
                    </li>
                ))}
            </ul>
        </div>
    );
};
