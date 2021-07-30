import styles from "../styling/Title.module.css"

const Title = ({ recipeTitle, addedOn, categories, numIng }) => {
    
    return (
        <div className={styles.container}>
            <h3>{recipeTitle}</h3>
            <div className={styles.rowContainer}>
                <text>{categories} </text>
                <text className={styles.delimeter}>|</text>
                <text>{addedOn} </text>
                <text className={styles.delimeter}>|</text>
                <text>{numIng} ingredients </text>
            </div>

        </div>
      );
}
export default Title;