import { useState } from "react";
import { AddCategory, GifGroup } from "./components";

export const GifExplorerApp = () => {
    const [categories, setCategories] = useState([ 'Initial D' ]);

    const onAddCategory = (category) => {

        if(categories.includes(category)) return;
        setCategories([category, ...categories, ]);
    }

    return (
        <>
            <h1>GifExplorerApp</h1>

            <AddCategory onAddCategory={onAddCategory} />

            { 
                categories.map( category => (
                    <GifGroup 
                        key={category} 
                        category={category} 
                    />
                ))
            }
        </>
    )
}

