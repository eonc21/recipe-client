import { useEffect, useState } from "react";
import Category from "./Category";
import styles from '../styling/CategoriesList.module.css'
import { useBetween } from "use-between";

const CategoriesList = ({ categories, onChange }) => {

    const [categoriesSelected, setCategoriesSelected] = useState([])
    const [colour, setColour] = useState([5])
    const [fontColour, setFontColour] = useState([5])
    const [border, setBorder] = useState([5])
    const lastElement = colour.length


    let temp = [...colour]
    let tempFont = [...fontColour]
    let borderRadius = [...border]
    let tempSelected = [...categoriesSelected]

    const onClick = (index, category) => {

        if (colour[index] === '#ffc53b') {
            temp[index] = "transparent"
            tempFont[index] = "black"
            tempSelected = tempSelected.filter(item => item !== categories[index])
            setColour(temp)
            setFontColour(tempFont)
            setCategoriesSelected(tempSelected)
        
        } else {
            temp[index] = "#ffc53b"
            tempFont[index] = "white"
            tempSelected.push(categories[index])
            setColour(temp)
            setFontColour(tempFont)
            setCategoriesSelected(tempSelected)
            

            if (index === 4) {
                borderRadius[index] = "10px"
                setBorder(borderRadius)
                console.log(index, lastElement)
            }
     
        }        
         }

         

            useEffect(() => {
                onChange(categoriesSelected)
            }, [categoriesSelected])


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
                    onClick(index, category)
                }} />
            ))}
            
        </div>
    );
}

export default CategoriesList;