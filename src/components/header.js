import Link from "next/link";
import styles from "../app/page.module.css";

export default function Header() {
    
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <Link href='/'><h1>Untitled Store</h1></Link>
            </div>
            <div className={styles.linkBar}>
                <Link href='/'><h3 className={styles.linkBarItem}>Home</h3></Link>
                <Link href='/pages/store'><h3 className={styles.linkBarItem}>Store</h3></Link>
                <h3 className={styles.linkBarItem}>About</h3>
                <h3 className={styles.linkBarItem}>Contacts</h3>
            </div>
        </div>
    )
}