import { useEffect, useState } from 'react'
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { CssBaseline, Typography } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import NotFoundPage from './pages/NotFoundPage';
import HomePage from './pages/HomePage';
import SingleCocktail from './pages/SingleCocktail';
import Navigation from './components/Navigation';
import lightTheme from './themes/light';
import darkTheme from './themes/dark';
import SearchPage from './pages/SearchPage';
import axios from 'axios';
import Ingredients from './components/Ingredients';



const themes = {
  light: lightTheme,
  dark: darkTheme
};

const StyledApp = styled('div')`
  background: ${(props) => props.theme.palette.background.default};
  min-height: 100vh;
`;

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [ingredientList, setIngredientList] = useState<string[]>([]);

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  }

  useEffect(() => {
    axios.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list').then((response) => {
        console.log('ingredient-list: ', response.data);
        const newIngredientList = response?.data?.drinks?.map((ing: { strIngredient1: string }, idx: number) => ing.strIngredient1) || [];
        setIngredientList(newIngredientList);
    })
}, []);

  return (
    <ThemeProvider theme={darkMode ? themes.dark : themes.light}>
      <CssBaseline />
      <StyledApp className="App">
        <Navigation isDarkMode={darkMode} onThemeChange={handleThemeChange}/>
        <Ingredients ingredients={ingredientList} />

        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/cocktails' element={<HomePage />} />
          <Route path="/cocktails/:id" element={<SingleCocktail />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path='/search' element={<SearchPage />} />
        </Routes>


      </StyledApp>
    </ThemeProvider>

  )
}

export default App
