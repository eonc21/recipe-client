import { useEffect, useState } from "react";
import Recipe from "./Recipe";
import styles from "../styling/RecipesList.module.css"

const RecipesList = ({ recipes }) => {

    const onClick = (recipe) => {
        alert(recipe.id)
    }

    return ( 
        <div className={styles.container}>
            {recipes.map(recipe => (
                <Recipe 
                onClick={ () => {
                    onClick(recipe)
                }
                }
                recipeTitle={recipe.title}
                recipePicture={recipe.pictureLink}
                recipeDescription={recipe.description}
                />
            ))}
        </div>
     );

    }
export default RecipesList;