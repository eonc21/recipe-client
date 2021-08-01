import styles from "../styling/WelcomeMessage.module.css"
import Button from "./Button";
import { useHistory } from "react-router";


const WelcomeMessage = () => {
    const history = useHistory();

    const onClickNewRecipe = () => {
        history.push({
            pathname: `/create`, 
    });
    }

    const onClickAllRecipes = () => {
        alert("you want all the recipes? NOT IMPLEMENTED YET THO")
    }

    return ( 
        <div className={styles.container}>
            <h3>Welcome to Elipe.</h3>
            <h1>A collection of <br /> student recipes.</h1>
            <h3>Easy, cheap and fast recipes I am <br/> saving for future reference.</h3>
            <div className={styles.buttonContainer}>
                <Button 
                    buttonText="Take a look"
                    onClick={onClickAllRecipes}/>

                <Button
                    buttonText="Add recipe" 
                    buttonColor="#EE6F6C"
                    onClick={onClickNewRecipe}/>
            </div>
            
        </div>
     );
}
 
export default WelcomeMessage;