import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      
      <Link href='/pages/store'>
        <div className={styles.homeMain}>
          <h1>Welcome!</h1>
          <p>Check out our products.</p>
        </div>
      </Link>
    </main>
  );
}
