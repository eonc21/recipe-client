import styles from '../styling/Category.module.css'


const Category = ({ categoryTitle }) => {
    return ( 
        <div className={styles.container}>
            {categoryTitle}
        </div>
     );
}
 
export default Category;