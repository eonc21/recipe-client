import NavigationBar from "../NavigationBar"
import WelcomeMessage from "../WelcomeMessage"
import Picture from "../Picture"
import styles from '../../styling/CreateRecipeScreen.module.css'
import Image from '../../attributes/add3.png'
import Dropdown from 'react-dropdown';
import { useEffect, useState, useRef } from "react";
import {
    BrowserRouter as Router,
    useLocation
  } from "react-router-dom";
import Select from 'react-select'
import constants from "../../util/constants"


const CreateRecipeScreen = () => {

    const location = useLocation();
  const [categories, setCategories] = useState(location.state)

  console.log("this shit was successful", categories)


    return ( 
        <div>
            <div className={styles.container}>
                <NavigationBar />
                <div className={styles.columnContainer}>
                    <WelcomeMessage 
                        first="New idea?"
                        second="Add a new"
                        third="recipe here."
                        newStyle={{height: "40vh"}}/>

                    <form className={styles.form}>

                        <label>
                            <input type="text" name="title" placeholder="Title"/>
                        </label>

                        
                        <Select 
                            controlClassName={styles.dropdownControl}
                            className={styles.dropdown}
                            options={categories} 
                            name="Categories"
                            isMulti
                            placeholder="Select an option" />

                        <div className={styles.halfContainer}>
                                <input className={styles.idk} type="text" name="duration" placeholder="Duration in minutes"/>
                                <input className={styles.idk} clastype="text" name="duration" placeholder="Duration in minutes"/>
                        </div> 

                            <input type="submit" value="Submit" />
                    </form>

                </div>
               
                <Picture link={Image} />    
            </div>
          
        </div>
        
     );
}
 
export default CreateRecipeScreen;