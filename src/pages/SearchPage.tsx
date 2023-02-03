import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import CocktailsList from "../components/CocktailsList";
import { ICocktail } from "./HomePage";
import { styled } from '@mui/material/styles';

const StyledSearchPage = styled('div')`
    margin-bottom: 50px;
`;

const SearchPage = () => {
    const [cocktails, setCocktails] = useState<ICocktail[]>([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const [isLoading, setIsLoading] = useState(true);
    const term = searchParams.get('term');

    useEffect(() => {
        let url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
        if (term && term.length > 0) {
            axios.get(url + term).then((response) => {
                if(response?.data?.drinks) {
                    setCocktails(response.data.drinks);
                    setIsLoading(false);
                }


            });
        }
    }, []);

    return <StyledSearchPage>
        {isLoading ? 'is Loading' : <CocktailsList cocktails={cocktails} />}
    </StyledSearchPage>
}

export default SearchPage;