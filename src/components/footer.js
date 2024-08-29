import styles from '../app/page.module.css';
import Link from "next/link";

export default function Footer() {

    return (
        <div className={styles.footer}>
            <div className={styles.footerPages}>
                <div className={styles.footerGroup}>
                    <Link href='/'><p>Home</p></Link>
                    <Link href='/store'><p>Store</p></Link>
                </div>
                <div className={styles.footerGroup}>
                    <Link href='/about'><p>About</p></Link>
                    <Link href='/contacts'><p>Contacts</p></Link>
                </div>
            </div>
            <div>
                <p style={{textAlign: 'center'}}>Copyright © 2024-2024 Insert-Company-Name. All rights reserved.</p>
            </div>
        </div>
    )
}