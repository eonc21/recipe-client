import { useEffect, useState } from "react";
import Category from "./Category";
import styles from '../styling/CategoriesList.module.css'
import { useBetween } from "use-between";

const CategoriesList = ({ categories, onChange }) => {

    const [categoriesSelected, setCategoriesSelected] = useState([])
    const [colour, setColour] = useState([5])
    const [fontColour, setFontColour] = useState([5])
    const [border, setBorder] = useState([5])

    // temporary arrays for mutating
    // state on a onclick event
    let temp = [...colour]
    let tempFont = [...fontColour]
    let borderRadius = [...border]
    let tempSelected = [...categoriesSelected]


    /**
     * @param index the index of the category
     * @param category the category enum pressed
     * 
     * Changes the background and font colour
     * of the selected category and updates
     * the categories array to the new selected ones.
     */
    const onClick = (index, category) => {

        // if the colour is orange, which
        // means it's already selected, 
        // deselect it by making it yellow
        // again with a black font, also
        // discard the category from the array
        if (colour[index] === '#ffc53b') {
            temp[index] = "transparent"
            tempFont[index] = "black"
            tempSelected = tempSelected
                        .filter(item => item !== categories[index])

            setColour(temp)                                                                         
            setFontColour(tempFont)
            setCategoriesSelected(tempSelected)
        

        // otherwise, do the opposite and select
        } else {
            temp[index] = "#ffc53b"
            tempFont[index] = "white"
            tempSelected.push(categories[index])

            setColour(temp)
            setFontColour(tempFont)
            setCategoriesSelected(tempSelected)
            
            // stupid way of making sure that
            // the last category has a rounded corner
            if (index === 4) {
                borderRadius[index] = "10px"
                setBorder(borderRadius)
            }
     
        }        
    }

    // Callback for state lift to Wrapper
    useEffect(() => {
        onChange(categoriesSelected)
    }, [categoriesSelected])


    return (  
        <div className={styles.container}>
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