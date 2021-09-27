import React from 'react';
import { useViewport } from '../../hooks/useViewport';
import { NavbarbarDesktop } from './NavbarDesktop';
import { NavbarMobile } from './NavbarMobile';

export const Navbar = () => {
    const { width } = useViewport();
    const breakpoint = 768;
    return width > breakpoint ? <NavbarbarDesktop /> : <NavbarMobile />;
};
