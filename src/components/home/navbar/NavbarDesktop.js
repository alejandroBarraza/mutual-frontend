import React from 'react';
import { Link } from 'react-router-dom';
import { NavbarItem } from './NavbarItem';
import './NavbarDesktop.css';
import '../../../container.css';

export const NavbarbarDesktop = () => {
    return (
        <div className='wrapper'>
            <nav className='navbar container'>
                <div className='logo'>
                    <img src='./mutual-svg.svg' alt='logo-mutual' />
                </div>
                <ul className='navbar-items'>
                    {NavbarItem.map((item, index) => (
                        <li key={index}>
                            <Link className={item.cName} to={item.url}>
                                {item.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};
