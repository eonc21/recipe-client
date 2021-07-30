import styles from "../styling/Step.module.css"

const Step = ({ index, text }) => {
    return ( 
        <div className={styles.container}>
            <h2>{index + 1}</h2>
            {text}
        </div>
     );
}
 
export default Step;