import styles from '../styling/Category.module.css'


const Category = ({ categoryTitle, onClick, colour }) => {
    return ( 
        <div
         className={styles.container}
         style={{backgroundColor: colour}}

         onClick={onClick}>
            {categoryTitle}
        </div>
     );
}
 
export default Category;