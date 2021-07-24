import CategoriesList from "./CategoriesList";
import RecipesList from "./RecipesList";
import RecipeMessage from "./RecipeMessage";
import styles from '../styling/Wrapper.module.css'


const Wrapper = () => {
    return ( 
        <div className={styles.container}>
            <div className={styles.row}>
                <RecipeMessage />
                <CategoriesList />
            </div>
            
            <div className={styles.recipeContainer}>
                <RecipesList />

            </div>
        </div>
     );
}
 
export default Wrapper;