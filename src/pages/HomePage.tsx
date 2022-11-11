import { Box, Chip, Container, Grid, Paper } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import CocktailItem from "../components/CocktailItem";
import CocktailsList from "../components/CocktailsList";
import { styled } from '@mui/material/styles';

export interface ICocktail {
    idDrink: string;
    strDrink: string;
    strCategory: string;
    strAlcoholic: string;
    strDrinkThumb: string;
}

const StyledHomePage = styled('div')`
    .ingredients{
        display: flex;
        overflow: auto;
        margin-bottom: 50px;

        .ingredient {
            margin: 5px;
            

            .MuiChip-root {
                cursor: pointer;
            }
        }
    }
`;


const HomePage = () => {
    const [cocktails, setCocktails] = useState<ICocktail[]>([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const ingredient = searchParams.get('ingredient');
    const [isLoading, setIsLoading] = useState(true);


    const getInitialCocktails = () => {
        const baseURL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=i';
        axios.get(baseURL).then((response) => {
            if (response?.data?.drinks) {
                setCocktails(response.data.drinks);
                setIsLoading(false);
            }

        });
    }

    useEffect(() => {
        getInitialCocktails();
    }, []);

    useEffect(() => {
        setIsLoading(true);
        if (ingredient && ingredient.length > 1) {
            axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=' + ingredient).then((response) => {
                if (response?.data?.drinks) {
                    setCocktails(response.data.drinks);
                    setIsLoading(false);
                }
            });
        } else {
            getInitialCocktails();
        }

    }, [ingredient]);



    return <StyledHomePage>

        {isLoading ? 'is loading...' : <CocktailsList cocktails={cocktails} />}

    </StyledHomePage>
}

export default HomePage;