import { useEffect, useState } from "react";
import Recipe from "./Recipe";
import styles from "../styling/RecipesList.module.css"
import { useHistory } from 'react-router-dom'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const RecipesList = ({ recipes }) => {
    const history = useHistory();
    const [clickedRecipe, setClickedRecipe] = useState()

    const onClick = (recipe) => {

        fetch(`http://localhost:5001/api/recipes/${recipe.id}`)
          .then(response => response.json())
          .then(res =>  {
              setClickedRecipe(res)
              history.push({
                pathname: `/recipe`, 
                state: res
        });
          })

        
      
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