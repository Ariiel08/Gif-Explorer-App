import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGroupItem } from "./GifGroupItem";

export const GifGroup = ({category}) => {

    const {gifs, isLoading} = useFetchGifs(category);
    
    return (
        <>
            <h3>{category}</h3>

            {
                isLoading && (<h2>Cargando...</h2>)
            }

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
