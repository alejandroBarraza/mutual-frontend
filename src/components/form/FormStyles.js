import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
export const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
        marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
        borderRadius: 5,
        position: 'relative',
        backgroundColor: '#FAFAFA',
        border: '2px solid #ced4da',
        fontSize: '1.5rem',
        width: '100%',
        padding: '10px 12px',
        transition: theme.transitions.create(['border-color', 'background-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
            borderColor: theme.palette.primary.main,
        },
    },
}));

export const styles = {
    outterBox: {
        minHeight: '72vh',
        width: '100%',
        position: 'relative',
        pb: '4rem',
    },
    innerBox: {
        bgcolor: '#C3D600',
        height: '36vh',
        width: '100%',
        position: 'absolute',
    },
    container: {
        position: 'relative',
        pt: '4rem',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
    },
    boxTitle: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        height: '2rem',
        color: '#fff',
        fontSize: '3rem',
    },
    boxButton: {
        gridColumn: '1 / 3',
        bgcolor: '#C3D600',
        fontSize: '1.5rem',
        fontWeight: 'bold',
        color: 'white',
    },
    boxForm: {
        flexDirection: 'column',
        gridTemplateColumns: { sm: '1fr 1fr' },
        gap: 2,
        width: '90%',
        height: '100%',
        mt: '2rem',
        padding: '2rem',
        bgcolor: '#fff',
        borderRadius: '.8rem',
        boxShadow: 3,
    },
};
