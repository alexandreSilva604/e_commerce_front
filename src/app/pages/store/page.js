import styles from '@/app/page.module.css';
import ProductDisplay from '@/components/productDisplay';

export default function Store() {

    return (
        <div className={styles.storeMain}>
            <h1 className={styles.storeTitle}>Store</h1>
            <div className={styles.storeProducts}>
                <ProductDisplay product={{name: "Test Product 1", price: "$ 10.00"}} />
                <ProductDisplay product={{name: "Test Product 2", price: "$ 20.00"}} />
                <ProductDisplay product={{name: "Test Product 3", price: "$ 30.00"}} />
            </div>
        </div>
    )
}