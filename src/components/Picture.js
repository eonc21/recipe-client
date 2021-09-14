import styles from '../styling/Picture.module.css'

const Picture = ({ link }) => {
    return ( 
        <div className={styles.container}>
            <img src={link} alt="girl cooking"/>
        </div>
     );
}
 
export default Picture;