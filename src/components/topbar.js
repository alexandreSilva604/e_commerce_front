import Link from 'next/link';
import styles from '../app/page.module.css';

export default function TopBar() {

    return (
        <div className={styles.topBar}>
            <div>
                <Link href="/pages/login"><span>Login</span></Link>
                |
                <Link href="/pages/signup"><span>Sign Up</span></Link>
            </div>
        </div>
    )
}