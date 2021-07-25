import CategoriesList from "./CategoriesList";
import RecipesList from "./RecipesList";
import RecipeMessage from "./RecipeMessage";
import styles from '../styling/Wrapper.module.css'
import { useEffect, useState, useRef } from "react";


const Wrapper = () => {

    const [recipes, setRecipes] = useState([])
    const [categories, setCategories] = useState([])
    const [filters, setFilters] = useState([]);


     const handleFilterChange = (newValue) => {
        setFilters(newValue)
      }
      

      /**
     * useEffect that fetches the recipes
     * from the getAll endpoint.
     */
      let tempArray =[]
      let trigger
    useEffect(() => {
        fetch("http://localhost:5001/api/recipes/getAll")
        .then(response => response.json())
        .then(res =>{
            //  console.log(res)  
             setRecipes(res)
             filters.includes(res.map(r => r.categories.map(c => c.stringName)))

             for (let i = 0; i < recipes.length; i++) {
                for (let j = 0; j < filters.length; j++) {
                    console.log("recipe", recipes[i].categories.map(c => c.stringName))
                    console.log(filters[j])
                    console.log(recipes[i].categories.map(c => c.stringName).includes(filters[j].stringName))
                    if (recipes[i].categories.map(c => c.stringName).includes(filters[j].stringName)) {
                        tempArray.push(recipes[i])  
                        console.log((i == recipes.length - 1 && j == filters.length - 1) )
                        if (i == recipes.length - 1 && j == filters.length - 1) 
                        console.log("final array", tempArray) 

                            setRecipes(tempArray)
                    }

                } 
                // setRecipes(tempArray)

             }

  
            })
    }, [filters])

    // useEffect(() => {
    //     setRecipes(tempArray)
    // }, [trigger])


    /**
     * useEffect that fetches the categories
     * from the getAll endpoint.
     */

     useEffect(() => {
        fetch("http://localhost:5001/api/categories/getAll")
        .then(response => response.json())
        .then(res =>{            
             setCategories(res)

            })
    }, [])


    const previousValues = useRef({ filters, recipes });
  
    useEffect(() => {
      if (
        previousValues.current.filters !== filters &&
        previousValues.current.recipes !== recipes
      ) {

        console.log("both changed")
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
                    recipes={recipes}
                    filters={filters} />

            </div>
        </div>
     );
}
 
export default Wrapper;