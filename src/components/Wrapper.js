import CategoriesList from "./CategoriesList";
import RecipesList from "./RecipesList";
import RecipeMessage from "./RecipeMessage";
import styles from '../styling/Wrapper.module.css'
import { useEffect, useState } from "react";


const Wrapper = () => {

    const [recipes, setRecipes] = useState([])
    const [categories, setCategories] = useState([])
    const [filters, setFilters] = useState([]);


    

     const handleFilterChange = (newValue) => {
        setFilters(newValue)
      }

      useEffect(() => {
          console.log(filters)
      }, [filters])
      

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


    /**
     * useEffect that fetches the categories
     * from the getAll endpoint.
     */

     useEffect(() => {
        fetch("http://localhost:5001/api/categories/getAll")
        .then(response => response.json())
        .then(res =>{
             console.log(res)  
             setCategories(res)
            })
    }, [])


    return ( 
        <div className={styles.container}>
            <div className={styles.row}>
                <RecipeMessage />
                <CategoriesList 
                    categories={categories}
                    onChange={handleFilterChange}/>
            </div>
            
            <div className={styles.recipeContainer}>
                <RecipesList 
                    recipes={recipes} />

            </div>
        </div>
     );
}
 
export default Wrapper;