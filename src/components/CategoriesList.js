import { useEffect, useState } from "react";
import Category from "./Category";
import styles from '../styling/CategoriesList.module.css'

const CategoriesList = () => {

    const onClick = (index) => {

        if (colour[index] === 'orange') {
            let temp = [...colour]
            temp[index] = "white"
            setColour(temp)
        
        } else {
            let temp = [...colour]
            temp[index] = "orange"
            setColour(temp)
        }
        
        // console.log(colour)   this went right, it's good

        
    }

    const [colour, setColour] = useState([])
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch("http://localhost:5001/api/categories/getAll")
        .then(response => response.json())
        .then(res =>{
            //  console.log(res)  
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