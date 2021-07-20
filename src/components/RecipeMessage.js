import styles from "../styling/RecipeMessage.module.css"

const RecipeMessage = () => {
    return (  
        <div className={styles.container}>
            <h3>
            Ready for cooking?
        </h3>
        <h1>
            Click on a recipe for details.
        </h1>
        </div>
    );
}
 
export default RecipeMessage;