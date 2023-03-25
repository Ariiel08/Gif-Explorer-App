import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
    const [gifs, setGifs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        getGifs(category)
            .then(gifs => {
                setGifs(gifs);
                setIsLoading(false);
            });
    }, []);

    return {
        gifs,
        isLoading
    }
}
