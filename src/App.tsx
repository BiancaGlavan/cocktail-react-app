import { useState } from 'react'
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { Typography } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import NotFoundPage from './pages/NotFoundPage';
import HomePage from './pages/HomePage';
import SingleCocktail from './pages/SingleCocktail';


const theme = createTheme({
  typography: {
    fontFamily: 'Poppins'
  }
});

function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        App
        <Typography variant="h5">Element tkkdf</Typography>


        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/cocktails' element={<HomePage />} />
          <Route path="/cocktails/:id" element={<SingleCocktail />} />
          <Route path="*" element={<NotFoundPage />} />

      </Routes>

      
      </div>
    </ThemeProvider>

  )
}

export default App
