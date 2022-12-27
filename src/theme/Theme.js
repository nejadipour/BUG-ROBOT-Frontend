import { createTheme } from '@material-ui/core';

const Theme = createTheme({
    typography: {
        fontFamily: 'IRANSans'
    },
    palette: {
        primary: {
          main: '#b5b5b5',
        },
        secondary: {
          main: "#ffa42e",
        },
        background: {
          default: "#201f1d",
          secondary: "#201f1d",
        },
        text: {
          main: '#e4e4e4',
        },
        error: {
          main: '#ff698c',
        },
        fire: {
          main: '#ff6024',
        }
    },
})

export default Theme;
