import styles from "../styling/IngredientsList.module.css"
import Ingredient from "./Ingredient";

const IngredientsList = ({ recipe }) => {
    return ( 
        <div className={styles.halfRowContainer}>
                <img className={styles.image} alt="the food" src={recipe.pictureLink}/>
                <div className={styles.text}>
                    {recipe.ingredients.map(ing => (
                        <Ingredient name={ing.name} />
                    ))}
                </div>
               
        

              </div>

     );
}
 
export default IngredientsList
