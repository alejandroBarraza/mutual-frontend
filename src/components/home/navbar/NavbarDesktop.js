import React from 'react';
import { Link } from 'react-router-dom';
import { NavbarItem } from './NavbarItem';
import './NavbarDesktop.css';
import '../../../container.css';
import { Link as Lonk } from 'react-scroll';

import { Tooltip, IconButton, Link as LinkMui, Box } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InstagramIcon from '@mui/icons-material/Instagram';

export const NavbarbarDesktop = () => {
    return (
        <div className='wrapper'>
            <nav className='navbar container'>
                <Link className='link' to='/'>
                    <img className='image' src='/mutual-svg.svg' alt='logo-mutual' />
                </Link>
                <ul className='navbar-items'>
                    {NavbarItem.map((item, index) =>
                        item.section ? (
                            <li key={index}>
                                <Lonk
                                    activeClass='active'
                                    to={item.section}
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                >
                                    <Link className={item.cName} to={item.url}>
                                        {item.title}
                                    </Link>
                                </Lonk>
                            </li>
                        ) : (
                            <li key={index}>
                                <Link className={item.cName} to={item.url}>
                                    {item.title}
                                </Link>
                            </li>
                        )
                    )}
                </ul>
                <Box>
                    <Tooltip title='Instagram'>
                        <IconButton>
                            <LinkMui
                                href='https://www.instagram.com/c.aunteespero/?hl=es-la'
                                target='_blank'
                                rel='noopener'
                            >
                                <InstagramIcon sx={{ color: '#91B722' }} />
                            </LinkMui>
                        </IconButton>
                    </Tooltip>
                    <Tooltip title='Iniciar Sección'>
                        <IconButton>
                            <LinkMui
                                href='https://aunteespero-admin.herokuapp.com/admin/'
                                target='_blank'
                                rel='noopener'
                            >
                                <AccountCircleIcon sx={{ color: '#91B722' }} />
                            </LinkMui>
                        </IconButton>
                    </Tooltip>
                </Box>
            </nav>
        </div>
    );
};
