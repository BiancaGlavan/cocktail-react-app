import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { ICocktail } from "../pages/HomePage";
import CocktailItem from "./CocktailItem";
import { styled } from '@mui/material/styles';

interface IPropsCocktailList {
    cocktails: ICocktail[];

}

const StyledCocktailList = styled(Grid)`

`;

const CocktailsList = ( { cocktails }: IPropsCocktailList) => {

    return <StyledCocktailList container spacing={2}>
        {cocktails.map((cocktail, idx) => <Grid key={idx} item xs={12} sm={6} md={3}>
            <Link to={`/cocktails/${cocktail.idDrink}`}>
                <CocktailItem cocktail={cocktail} />
            </Link>
        </Grid>)}
    </StyledCocktailList>
}
export default CocktailsList;