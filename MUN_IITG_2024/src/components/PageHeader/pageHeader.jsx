import styles from "./pageHeaderStyles.module.css"

const PageHeader = ({title, color}) => {
    return ( 
        <div style={{backgroundColor:`${color}`}} className={styles.container} >
            <h2 className={styles.title}>{title}</h2>
        </div>
     );
}
 
export default PageHeader;