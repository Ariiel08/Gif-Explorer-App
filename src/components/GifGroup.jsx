import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import { GifGroupItem } from "./GifGroupItem";

export const GifGroup = ({category}) => {

    const [gifs, setGifs] = useState([]);
    
    useEffect(() => {
        getGifs(category)
            .then(gifs => setGifs(gifs));
    }, []);
    
    return (
        <>
            <h3>{category}</h3>

            <div className="card-grid">
                {
                    gifs.map((image) => (
                        <GifGroupItem key={image.id} {...image} />
                    ))
                }
            </div>
        </>
    );
}
