import { useState } from "react";
import styles from "../styling/RecipeScreen.module.css"
import Ingredient from "./Ingredient";
import IngredientsList from "./IngredientsList";
import Step from "./Step"
import Title from "./Title";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter,
    useLocation
  } from "react-router-dom";
import NavigationBar from "./NavigationBar";

const RecipeScreen = (props) => {
  const location = useLocation();
  const [recipe, setRecipe] = useState(location.state)
    let temp = recipe.instructions.split('..')
    const [steps, setSteps] = useState(temp)

  
    return (
        <div className={styles.everything}>
            <NavigationBar />

        <div className={styles.container}>
            <Title 
            recipeTitle={recipe.title}
            addedOn={recipe.addedOn}
            categories={recipe.categories.map(c => c.stringName)}
            numIng={recipe.ingredients.length}
            />

          <div className={styles.rowContainer}>
              <div className={styles.halfRowContainer}>
                  <div className={styles.text}>
                    {steps.map((step, index) => (
                      <Step
                        text={step}
                        index={index} />
                    ))}
                      
                  </div>
              </div>
              <IngredientsList recipe={recipe} />
          </div>
        
       
       
  
  
      </div>
        </div>
    

    )
  }

  export default RecipeScreen