import { useEffect, useState } from "react";
import Category from "./Category";
import styles from '../styling/CategoriesList.module.css'

const CategoriesList = () => {

    const [categories, setCategories] = useState([])

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
            {categories.map(category => (
                <Category 
                categoryTitle={category.stringName} />
            ))}
            
        </div>
    );
}
 
export default CategoriesList;