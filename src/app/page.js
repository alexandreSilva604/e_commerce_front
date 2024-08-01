import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Link href='/pages/store'>
        <div className={styles.homeMain}>
          <div className={styles.mainGroup}>
            <h1>Welcome</h1>
            <p>Check out our products!</p>
          </div>
          <Image src='/img/shopping-cart.jpg' width={650} height={400} />
        </div>
      </Link>
    </div>
  );
}
