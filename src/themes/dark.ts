import { createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
    typography: {
        fontFamily: 'Poppins'
    },
    status: {
        danger: '#d60909'
    }
});

export default darkTheme;