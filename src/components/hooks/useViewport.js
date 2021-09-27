import { useEffect, useState } from 'react';

export const useViewport = () => {
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleWindowResize);
        return () => window.removeEventListener('resize', handleWindowResize);
    }, []);
    // Return the width of the current viewport
    return { width };
};
