import styles from "../app/page.module.css";

export default function HomeHeader() {
    
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <h1>Untitled Store</h1>
            </div>
            <div className={styles.linkBar}>
                <h3 className={styles.linkBarItem}>Home</h3>
                <h3 className={styles.linkBarItem}>Store</h3>
                <h3 className={styles.linkBarItem}>About</h3>
                <h3 className={styles.linkBarItem}>Contacts</h3>
            </div>
        </div>
    )
}