import { useEffect, useState } from "react";
import Category from "./Category";
import styles from '../styling/CategoriesList.module.css'

const CategoriesList = () => {

    const onClick = (index) => {
        alert('CLICK')
        setColour("green")
    }

    const [colour, setColour] = useState([])
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
            <div className={styles.independentContainer}>All</div>
            {categories.map((category, index) => (
                <Category 
                colour={colour[index]}
                categoryTitle={category.stringName}
                onClick={() => { 
                    onClick(index)
                }} />
            ))}
            
        </div>
    );
}
 
export default CategoriesList;