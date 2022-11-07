import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface ISingleCocktail {

}

const SingleCocktail = () => {

    const params = useParams();
    console.log(params);
    const cocktailId = params.id;
    const [cocktail, setCocktail] = useState<ISingleCocktail | null>(null);

    useEffect(() => {
        //fetch Single Cocktail from API
        
    }, [cocktailId])

    return <div>Single Page</div>
}
export default SingleCocktail; 