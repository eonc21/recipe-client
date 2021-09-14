import styles from "../styling/WelcomeMessage.module.css"
import Button from "./Button";
import { useHistory } from "react-router";


const WelcomeMessage = ({ first, second, third, forth, fifth, hasButtons, newStyle, categories }) => {
    const history = useHistory();

    const onClickNewRecipe = () => {
        history.push({
            pathname: `/create`, 
            state: categories
    });
    }

    const onClickAllRecipes = () => {
        alert("you want all the recipes? NOT IMPLEMENTED YET THO")
    }

    return ( 
        <div className={styles.container}
        style={newStyle}>
            <h3>{first}</h3>
            <h1>{second} <br /> {third}</h1>
            <h3>{forth} <br/> {fifth}</h3>
            
            {hasButtons &&
            <div className={styles.buttonContainer}>
                <Button 
                    buttonText="Take a look"
                    onClick={onClickAllRecipes}/>

                <Button
                    buttonText="Add recipe" 
                    buttonColor="#EE6F6C"
                    onClick={onClickNewRecipe}/>
            </div>
            }
            
        </div>
     );
}
 
export default WelcomeMessage;