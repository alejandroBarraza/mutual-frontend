export const styles = {
    card: {
        margin: 'auto',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        '&:hover': {
            boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)',
        },
    },
    media: {
        objectFit: 'cover',
        postion: 'relative',
        filter: 'brightness(90%)',
        transition: 'filter .5s ease-in-out',
        '&:hover': {
            filter: 'none',
        },
    },
    readInfo: {
        padding: '16px',
        display: 'flex',
        '& h6': {
            marginRight: '0.3rem',
        },
    },
};
