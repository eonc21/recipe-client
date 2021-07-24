import { useEffect, useState } from "react";
import Category from "./Category";
import styles from '../styling/CategoriesList.module.css'
import { useBetween } from "use-between";

const CategoriesList = ({ categories }) => {

    const onClick = (index, category) => {

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

        
        
    }
    const [colour, setColour] = useState([5])
    const [fontColour, setFontColour] = useState([5])
    const lastElement = colour.length
    const [border, setBorder] = useState([5])

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