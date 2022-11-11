import { Box, Chip, Container, Grid, Paper, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { styled } from '@mui/material/styles';

interface ISingleCocktail {
    strDrink: string;
    strDrinkThumb: string;
    strTags: string;
    strGlass: string;
    [key: string]: string;
    strInstructions: string;

}

const StyledCocktail = styled(Paper)`
    border-radius: 7px;
   
    .cocktail-info {
        padding: 20px;
    }

    .cocktail-img {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .title {
        text-transform: uppercase;
        letter-spacing: 1px;
        margin-bottom: 20px;
    }

    img {
        max-height: 100%;
        max-width: 100%;
        
    }

    .tags {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        margin-bottom: 20px;

        .tag {
            margin: 5px;
        }
    }

    .recomanded {
        margin-top: 20px;
       
        .ingredients {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;

            .ingredient {
                margin: 5px;
            }
        }
    }
`;

const SingleCocktail = () => {

    const params = useParams();
    console.log(params);
    const cocktailId = params.id;
    const [cocktail, setCocktail] = useState<ISingleCocktail | null>(null);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        setIsLoading(true);
        const cocktailURL = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktailId}`;
        axios.get(cocktailURL).then((response) => {
            console.log('responseee : ', response.data.drinks[0]);
            if (response?.data?.drinks?.length > 0) {
                setCocktail(response.data.drinks[0]);
                setIsLoading(false);
            }

        });

    }, [cocktailId]);

    const getIngredients = () => {
        let res = [];
        for (let i = 1; i <= 15; i++) {
            if (cocktail) {
                let ingredient = cocktail['strIngredient' + i];
                let measure = cocktail['strMeasure' + i];

                if (ingredient && ingredient.length > 0) {
                    let ing = <Typography variant="subtitle2" key={i}>
                        {measure} {ingredient}
                    </Typography>;

                    res.push(ing);
                }

            }
        }
        return res;
    }

    const getMoreCocktails = () => {
        let res = [];
        for (let i = 1; i <= 15; i++) {
            if (cocktail) {
                let ingredient = cocktail['strIngredient' + i];

                if (ingredient && ingredient.length > 0) {
                    let ing = <Link key={i} to={{ pathname: '/cocktails', search: 'ingredient=' + ingredient }}>
                        <Chip className="ingredient" label={ingredient} />
                    </Link>

                    res.push(ing);
                }

            }
        }
        return res;
    }


    return <Container style={{ paddingTop: '30px' }} maxWidth='lg'>
        {isLoading ? 'is loading...' : <StyledCocktail elevation={2} square={false}>
            <Grid container spacing={0}>
                <Grid className="cocktail-img" item xs={12} sm={5} md={4} >
                    <img src={cocktail?.strDrinkThumb}></img>
                </Grid>
                <Grid className="cocktail-info" item xs={12} sm={7} md={8}>
                    <Typography className="title" variant="h4">
                        {cocktail && cocktail.strDrink}
                    </Typography>
                    <Box className="tags">
                        {cocktail?.strTags?.split(',').map((tag, idx) => <Chip className="tag" key={idx} label={tag} />)}
                    </Box>
                    <Box>
                        {getIngredients()}
                    </Box>
                    <Box className="recomanded">
                        <Typography variant="subtitle2">More with same ingredients: </Typography>
                        <Box className="ingredients">
                            {getMoreCocktails()}
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </StyledCocktail>}
    </Container>


}
export default SingleCocktail; 