import styles from '@/app/page.module.css';
import ProductDisplay from '@/components/productDisplay';

export default function Store() {

    return (
        <div className={styles.storeMain}>
            <h1 className={styles.storeTitle}>Store</h1>
            <div className={styles.storeProducts}>
                <ProductDisplay product={{name: "World's Best Boss Mug", price: "$ 10.00", image: "/img/cup.webp"}} />
                <ProductDisplay product={{name: "Table", price: "$ 20.00", image: "/img/table.webp"}} />
                <ProductDisplay product={{name: "Fridge", price: "$ 30.00", image: '/img/fridge.jpeg'}} />
            </div>
        </div>
    )
}