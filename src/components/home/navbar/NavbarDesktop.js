import React from 'react';
import { Link } from 'react-router-dom';
import { NavbarItem } from './NavbarItem';
import './NavbarDesktop.css';
import '../../../container.css';
import { Link as Lonk} from "react-scroll";


export const NavbarbarDesktop = () => {
    return (
        <div className='wrapper'>
            <nav className='navbar container'>
                <Link className='link' to='/'>
                    <img className='image' src='/mutual-svg.svg' alt='logo-mutual' />
                </Link>
                <ul className='navbar-items'>
                    {NavbarItem.map((item, index) => (
                        item.section ?
                            <li key={index}>
                                <Lonk
                                    activeClass="active"
                                    to={item.section}
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}>
                                    <Link className={item.cName} to={item.url}>
                                        {item.title}
                                    </Link>
                                </Lonk>

                            </li>
                            :
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
