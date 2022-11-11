import { Chip } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

interface IPropsIngredients {
    ingredients: string[];
}

const StyledIngredients = styled('div')`
    margin-top: 20px;
    display: flex;
    overflow: auto;
    margin-bottom: 20px;

    .ingredient {
        margin: 10px 5px;
        

        .MuiChip-root {
            cursor: pointer;
        }
    }
`;

const Ingredients = ( { ingredients }: IPropsIngredients) => {

    return <StyledIngredients className='Ingredients'>
        {ingredients.map((ing, idx) => <Link className="ingredient" key={idx} to={{ pathname: '/cocktails', search: 'ingredient=' + ing }}>
            <Chip key={idx} label={ing} />
        </Link>
        )}

    </StyledIngredients>
}

export default Ingredients;