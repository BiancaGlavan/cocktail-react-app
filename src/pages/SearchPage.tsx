import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import CocktailsList from "../components/CocktailsList";
import { ICocktail } from "./HomePage";


const SearchPage = () => {
    const [cocktails, setCocktails] = useState<ICocktail[]>([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const [isLoading, setIsLoading] = useState(true);
    const term = searchParams.get('term');

    useEffect(() => {
        let url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
        if (term && term.length > 0) {
            axios.get(url + term).then((response) => {
                console.log('searchhhh: ', response.data.drinks);
                if(response?.data?.drinks) {
                    setCocktails(response.data.drinks);
                    setIsLoading(false);
                }


            });
        }
    }, []);

    return <div>
        {isLoading ? 'is Loading' : <CocktailsList cocktails={cocktails} />}
    </div>
}

export default SearchPage;