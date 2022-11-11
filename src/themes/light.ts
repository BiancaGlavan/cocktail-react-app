import { createTheme } from "@mui/material/styles";

const lightTheme = createTheme({
    palette: {
        background: {
            default: '#edebeb',
            paper: '#fff'
        },
        
    },
    typography: {
        fontFamily: 'Poppins'
    },
    status: {
        danger: '#d60909'
    }
});

export default lightTheme;