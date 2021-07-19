import styles from '../styling/Button.module.css'

const Button = ( { buttonText, buttonColor } ) => {
    return ( 
        <div>
            <button className={styles.btn} style={{backgroundColor: buttonColor}}>{ buttonText }</button>
        </div>
     );
}
 
export default Button;