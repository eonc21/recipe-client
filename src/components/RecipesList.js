import { useEffect, useState } from "react";
import Recipe from "./Recipe";
import styles from "../styling/RecipesList.module.css"

const RecipesList = () => {

    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        fetch("http://localhost:5001/api/recipes/getAll")
        .then(response => response.json())
        .then(res =>{
             console.log(res)  
             setRecipes(res)
            })
    }, [])
    return ( 
        <div className={styles.container}>
            {recipes.map(recipe => (
                <Recipe 
                recipeTitle={recipe.title}
                recipePicture={recipe.pictureLink}
                recipeDescription={recipe.description}
                />
            ))}
        </div>
     );

    }
export default RecipesList;