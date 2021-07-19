import styles from "../styling/WelcomeMessage.module.css"
import Button from "./Button";

const WelcomeMessage = () => {
    return ( 
        <div className={styles.container}>
            <h3>Welcome to Elipe.</h3>
            <h1>A collection of <br /> student recipes.</h1>
            <h3>Easy, cheap and fast recipes I am <br/> saving for future reference.</h3>
            <div className={styles.buttonContainer}>
                <Button buttonText="Take a look"/>
                <Button buttonText="Add recipe"/>
            </div>
            

        </div>
     );
}
 
export default WelcomeMessage;