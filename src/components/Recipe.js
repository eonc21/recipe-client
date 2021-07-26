import { useEffect, useState } from "react";
import styles from '../styling/Recipe.module.css'

const Recipe = ({ recipeTitle, recipeDescription, recipePicture }) => {
    
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [picture, setPicture] = useState("");

    useEffect(() => {
        setTitle(recipeTitle)
        setDescription(recipeDescription)
        setPicture(recipePicture)
    }, [recipeTitle])

    return ( 
        <div className={styles.container} >
            <div className={styles.imageContainer}>
              <img className={styles.image} src={picture}/>

            </div>
            <div className={styles.textContainer}>
                <h3>{title}</h3>
                <nobr></nobr>
                {/* <h3>---------</h3> */}
                <p>{description}</p>
            </div>
            
        </div>
    );
}
 
export default Recipe;