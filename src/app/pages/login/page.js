import styles from '@/app/page.module.css';

export default function Login() {

    return (
        <div className={styles.loginForm}>
            <h1>Login</h1>

            <form>
                <div className={styles.formGroup}>
                    <label>Username</label>
                    <input type="text"/>
                </div>
                <div className={styles.formGroup}>
                    <label>Password</label>
                    <input type="text"/>
                </div>

                <button type="button" className={styles.loginButton}><h2>Enter</h2></button>
            </form>
        </div>
    );
}