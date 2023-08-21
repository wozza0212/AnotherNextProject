import Image from "next/image";
import styles from "./navbar.module.css";
import Link from "next/link";

const NavBar = () => { 
    return (
            <nav className={styles.navigation}>
                <div className={styles.hamburgerLogo}>
                    <Image src="/alt-menu-svgrepo-com.svg" height={30} width={30} alt="hamburger menu" />
                </div>
                <div className={styles.logo}>
                    <Link href='/'><h1 className={styles.logoheading}>NextJS Blog</h1></Link>
                </div>
                <ul>
                    <Link href='/'><li>Home</li></Link>
                    <Link href='/about/'><li>About</li></Link>
                    <Link href='/posts'><li>Blog</li></Link>
                </ul>
            </nav>
    )

 }

 export default NavBar;