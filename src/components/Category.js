import styles from '../styling/Category.module.css'


const Category = ({ categoryTitle, onClick, colour, fontColour, border }) => {
    return ( 
        <div
         className={styles.container}
         style={{backgroundColor: colour,
        color: fontColour,
        borderBottomRightRadius: border,
        borderTopRightRadius: border }}

         onClick={onClick}>
            {categoryTitle}
        </div>
     );
}
 
export default Category;