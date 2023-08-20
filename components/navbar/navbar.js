import Image from "next/image";
import styles from "./navbar.module.css";

const NavBar = () => { 
    return (
            <nav className={styles.navigation}>
                <div className={styles.hamburgerLogo}>
                    <Image src="/alt-menu-svgrepo-com.svg" height={30} width={30} alt="hamburger menu" />
                </div>
                <div className={styles.logo}>
                    <a><h1 className={styles.logoheading}>NextJS Blog</h1></a>
                </div>
                <ul>
                    <a><li>Home</li></a>
                    <a><li>About</li></a>
                    <a><li>NextJS</li></a>
                </ul>
            </nav>
    )

 }

 export default NavBar;