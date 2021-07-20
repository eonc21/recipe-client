import styles from '../styling/Button.module.css'

const Button = ( { buttonText, buttonColor, onClick } ) => {
    return ( 
        <div>
            <button className={styles.btn}
             style={{backgroundColor: buttonColor}}
             onClick={onClick}
             >{buttonText}</button>
        </div>
     );
}
 
export default Button;