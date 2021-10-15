import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

import { render, cleanup } from '@testing-library/react';

import { BrowserRouter as Router } from 'react-router-dom';

import { NavbarbarDesktop } from '../../components/home/navbar/NavbarDesktop';
import { NavbarMobile } from '../../components/home/navbar/NavbarMobile';

afterEach(cleanup);

describe('testing <Navbar/> component', () => {
    it('should check render component at breakpoint 768px', async () => {
        const width = (window.innerWidth = 1200);
        const breakpoint = 768;
        const { container: containerMobile } = render(
            <Router>
                <NavbarMobile />
            </Router>
        );
        const { container: containerDekstop } = render(
            <Router>
                <NavbarbarDesktop />
            </Router>
        );
        const navbarDeskstopClass = containerDekstop.firstChild.classList.contains('wrapper');
        const navbarMobileClass = containerMobile.classList.contains('wrapper-mobile');

        if (width > breakpoint) {
            expect(navbarDeskstopClass).toBe(true);
        } else {
            expect(navbarMobileClass).toBe(true);
        }
    });
    it('should match snapshot', () => {
        const { container } = render(
            <Router>
                <NavbarbarDesktop />
            </Router>
        );
        expect(container).toMatchSnapshot();
    });
});
