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
        console.log(newValue)
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
            //  setRecipes(res)
            //  filters.includes(res.map(r => r.categories.map(c => c.stringName)))
            //  console.log(recipes)

             if (filters.length == 0) {
                 tempArray = res
             } else {
                for (let i = 0; i < recipes.length; i++) {
                    for (let j = 0; j < filters.length; j++) {
                        // console.log("for loops are ran more than once")
                        if (res[i].categories.map(c => c.stringName).includes(filters[j].stringName)) {
                            tempArray.push(res[i])  
                                
                        }
                    } 
                 }
             }
            setRecipes(tempArray)
            // console.log(tempArray)

  
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