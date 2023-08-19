 import styles from './layout.module.css'
 
 const Layout = ({children}) => {
    return (
        <div className={styles.container}>
            <h1>Layout Component</h1>
            {children}
        </div>
    )
 }

 export default Layout;