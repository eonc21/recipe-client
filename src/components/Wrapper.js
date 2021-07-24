import CategoriesList from "./CategoriesList";
import RecipesList from "./RecipesList";
import RecipeMessage from "./RecipeMessage";
import styles from '../styling/Wrapper.module.css'
import { useEffect, useState } from "react";


const Wrapper = () => {
    
    const [recipes, setRecipes] = useState([])
    const [categories, setCategories] = useState([])

    /**
     * useEffect that fetches the recipes
     * from the getAll endpoint.
     */

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
            <div className={styles.row}>
                <RecipeMessage />
                <CategoriesList />
            </div>
            
            <div className={styles.recipeContainer}>
                <RecipesList 
                    recipes={recipes} />

            </div>
        </div>
     );
}
 
export default Wrapper;