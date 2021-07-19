import Image from '../mainpic.png'
import styles from '../styling/Picture.module.css'

const Picture = () => {
    return ( 
        <div className={styles.container}>
            <img src={Image} alt="girl cooking"/>
        </div>
     );
}
 
export default Picture;