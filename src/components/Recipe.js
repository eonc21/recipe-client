import { useEffect, useState } from "react";
import styles from '../styling/Recipe.module.css'

const Recipe = ({ recipeTitle, recipeDescription, recipePicture }) => {
    
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [picture, setPicture] = useState("");

    useEffect(() => {
        setTitle(recipeTitle)
        setDescription(recipeDescription)
    }, [])

    return ( 
        <div className={styles.container} >
            <img src={picture}/>
            <h3>{title}</h3>
            <p>{description}</p>

        </div>
    );
}
 
export default Recipe;