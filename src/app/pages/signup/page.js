import styles from '@/app/page.module.css';

export default function SignUp() {

    return (
        <div className={styles.contentGroup}>
            <div className={styles.mainGroup}>
                <h1>Thank you for choosing us!</h1>
                <p>Please enter your personal information.</p>
            </div>
            <div className={styles.signUpForm}>
                <h1>Registration</h1>

                <form>
                    <div className={styles.formGroup}>
                        <label>Name:</label>
                        <input type="text"/>
                    </div>
                    <div className={styles.formGroup}>
                        <label>Username:</label>
                        <input type="text"/>
                    </div>
                    <div className={styles.formGroup}>
                        <label>Email:</label>
                        <input type="email"/>
                    </div>
                    <div className={styles.formGroup}>
                        <label>Password:</label>
                        <input type="password"/>
                    </div>

                    <button type="button" className={styles.loginButton}><h2>Register</h2></button>
                </form>
            </div>
        </div>
    );
}