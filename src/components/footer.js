import styles from '../app/page.module.css';
import Link from "next/link";

export default function Footer() {

    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <div className={styles.footer}>
                <div className={styles.footerGroup}>
                    <Link href='/'>Home</Link>
                    <Link href='/store'>Store</Link>
                </div>
                <div className={styles.footerGroup}>
                    <p>About</p>
                    <p>Contacts</p>
                </div>
            </div>
        </div>
    )
}