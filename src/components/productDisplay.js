import styles from '../app/page.module.css';

export default function ProductDisplay({product}) {

    return (
        <div className={styles.productDisplay}>
            <p>{product.name}</p>
            <h3>{product.price}</h3>
            <button className={styles.addCartButton}>Add to Cart</button>
        </div>
    );
}