import React, { useState } from 'react';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import MenuOpenRoundedIcon from '@mui/icons-material/MenuOpenRounded';
import { Link as Lonk } from "react-scroll";
import { NavbarItem } from './NavbarItem';
import { Link } from 'react-router-dom';
import '../../../container.css';
import './NavbarMobile.css';


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
                    item.section != null ?
                        
                        
                        <li key={index}>
                            <Lonk
                            key={index}
                            activeClass="active"
                            to={item.section}
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            onClick={handleClick}>
                                <Link className='navlinks' to={item.url}>
                                    {item.title}
                                </Link>
                            
                            </Lonk>
                        </li>
                        :
                        <li key={index}>
                            <Link className='navlinks' to={item.url} onClick={handleClick}>
                                {item.title}
                            </Link>
                        </li>
                ))}
                
            </ul>
        </div>
    );
};
