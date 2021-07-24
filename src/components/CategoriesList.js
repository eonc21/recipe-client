import { useEffect, useState } from "react";
import Category from "./Category";
import styles from '../styling/CategoriesList.module.css'

const CategoriesList = () => {

    const onClick = (index) => {

        let temp = [...colour]
        let tempFont = [...fontColour]
        let borderRadius = [...border]

        if (colour[index] === '#ffc53b') {
            temp[index] = "transparent"
            tempFont[index] = "black"
            setColour(temp)
            setFontColour(tempFont)
        
        } else {
            temp[index] = "#ffc53b"
            tempFont[index] = "white"
            setColour(temp)
            setFontColour(tempFont)

            if (index === 4) {
                borderRadius[index] = "10px"
                setBorder(borderRadius)
                console.log(index, lastElement)


            }
        }
        
        // console.log(colour)   this went right, it's good
        
    }
    const [colour, setColour] = useState([5])
    const [fontColour, setFontColour] = useState([5])
    const lastElement = colour.length

    const [categories, setCategories] = useState([])
    const [border, setBorder] = useState([5])

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
                border={border[index]}
                colour={colour[index]}
                fontColour={fontColour[index]}
                categoryTitle={category.stringName}
                onClick={() => { 
                    onClick(index)
                }} />
            ))}
            
        </div>
    );
}
 
export default CategoriesList;