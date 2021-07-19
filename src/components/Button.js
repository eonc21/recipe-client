import styles from '../styling/Button.module.css'

const Button = ( { buttonText } ) => {
    return ( 
        <div>
            <button className={styles.btn}>{ buttonText }</button>
        </div>
     );
}
 
export default Button;