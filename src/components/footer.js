import styles from '../app/page.module.css';

export default function Footer() {

    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <div className={styles.footer}>
                <div className={styles.footerGroup}>
                    <p>Home</p>
                    <p>Store</p>
                </div>
                <div className={styles.footerGroup}>
                    <p>About</p>
                    <p>Contacts</p>
                </div>
            </div>
        </div>
    )
}