import CategoriesList from "./CategoriesList";
import RecipesList from "./RecipesList";
import RecipeMessage from "./RecipeMessage";
import styles from '../styling/Wrapper.module.css'
import { useEffect, useState, useRef } from "react";
import constants from '../util/constants'


const Wrapper = () => {
    const [recipes, setRecipes] = useState([])
    const [recipesSelected, setRecipesSelected] = useState([])
    const [categories, setCategories] = useState([])
    const [filters, setFilters] = useState([]);
    const [recipeId, setRecipeId] = useState();

    const handleFilterChange = (newValue) => {
      setFilters(newValue)
    }


    /**
     * useEffect that updates the selected recipes on a filter change
     */
    let tempArray =[]
    useEffect(() => {
        if (filters.length == 0) {
            tempArray = recipes
        } else {
          for (let i = 0; i < recipes.length; i++) {
              for (let j = 0; j < filters.length; j++) {
                  if (recipes[i].categories.map(c => c.stringName).includes(filters[j].stringName)) {
                      tempArray.push(recipes[i])  
                  }
              } 
            }
        }

      setRecipesSelected(tempArray)
    }, [filters])


    /**
     * useEffect that fetches the categories and recipes
     * from their getAll endpoints.
     */
     useEffect(() => {
        fetch(constants.allCategories())
          .then(response => response.json())
          .then(res =>{            
              setCategories(res)
          })

        fetch(constants.allRecipes())
          .then(response => response.json())
          .then(res =>{            
              setRecipes(res)
              setRecipesSelected(res)
          })
    }, [])


    const previousValues = useRef({ filters, recipes });
  
    useEffect(() => {
      if (
        previousValues.current.filters !== filters &&
        previousValues.current.recipes !== recipes
      ) {

        previousValues.current = { filters, recipes };
      }
    });


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
                    recipes={recipesSelected}
                    filters={filters} />
            </div>
        </div>
     );
}
 
export default Wrapper;