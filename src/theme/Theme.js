import { createTheme } from '@material-ui/core';

const Theme = createTheme({
    typography: {
        fontFamily: 'IRANSans'
    },
    palette: {
        primary: {
          main: '#b8ff1f',
        },
        secondary: {
          main: "#ff006b",
        },
        background: {
          default: "#201f1d",
          secondary: "#201f1d",
        },
        text: {
          main: '#e4e4e4',
        },
        error: {
          main: '#ff7440',
        },
    },
})

export default Theme;
