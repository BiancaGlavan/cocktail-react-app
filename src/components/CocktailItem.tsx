import { Paper, Typography } from "@mui/material";
import { ICocktail } from "../pages/HomePage";
import { styled } from '@mui/material/styles';

interface IPropsCocktailItem {
    cocktail: ICocktail;
}


const StyledCocktail = styled(Paper)`
    overflow: hidden;
    img {
        max-width: 100%;

    }
    .cocktail-info {
        padding: 10px 20px;
        min-height: 150px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .category {
            margin-top: auto;
        }
    }
`;




const CocktailItem = ({ cocktail }: IPropsCocktailItem) => {

    return <StyledCocktail elevation={2} square={false}>

        <img src={cocktail.strDrinkThumb}></img>
        <div className="cocktail-info">
            <Typography variant="h5">
                {cocktail.strDrink}
            </Typography>
            {cocktail.strCategory ? <Typography className="category" variant='subtitle2'>
                Category: {cocktail.strCategory}
            </Typography> : null}
            <Typography variant='subtitle2'>
                {cocktail.strAlcoholic}
            </Typography>
        </div>
    </StyledCocktail>;

}

export default CocktailItem;