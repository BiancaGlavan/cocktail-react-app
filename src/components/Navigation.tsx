import { styled, alpha } from '@mui/material/styles';
import { Typography, Box, Toolbar, AppBar, IconButton, InputBase, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { Link } from 'react-router-dom';
import { KeyboardEventHandler, useState } from 'react';
import { useNavigate } from "react-router-dom";



interface IPropsNavigation {
    onThemeChange: () => void;
    isDarkMode: boolean;
}

const StyledNavigation = styled(AppBar)`
    .toggle-theme {
        color: #fff;
        margin-left: 20px;
    }

    .search-input {
        background: ${(props) => alpha(props.theme.palette.common.white, 0.15)};
        border-radius: ${(props) => props.theme.shape.borderRadius}px;

        .MuiInputBase-root {
            color: ${(props) => props.theme.palette.common.white};
        }

        &:hover: {
            background: ${(props) => alpha(props.theme.palette.common.white, 0.25)};
        }

        fieldset {
            outline: none;
            border: none;
        }

        input {
            padding: 10px;
            outline: none;
            border: none;
        }
    }
`;


const Navigation = ({ onThemeChange, isDarkMode }: IPropsNavigation) => {


    const [searchValue, setSearchValue] = useState('');
    const navigate = useNavigate();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        navigate("/search?term=" + searchValue);
    }


    return <StyledNavigation className='Navigation' position="static">

        <Toolbar>

            <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
                <Link to="/">Cocktail App</Link>
            </Typography>

            <form onSubmit={handleSubmit}>
                <TextField
                    className='search-input'
                    label=""
                    value={searchValue}
                    onChange={handleChange}
                />
            </form>



            <IconButton className='toggle-theme' onClick={onThemeChange}>
                {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>

        </Toolbar>
    </StyledNavigation>
}
export default Navigation;