import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGroup } from "./components/GifGroup";

export const GifExplorerApp = () => {
    const [categories, setCategories] = useState([ 'One Punch' ]);

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

