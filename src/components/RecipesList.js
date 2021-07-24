import { useEffect, useState } from "react";
import Recipe from "./Recipe";
import styles from "../styling/RecipesList.module.css"

const RecipesList = ({ recipes }) => {

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