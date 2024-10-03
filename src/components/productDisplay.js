import Image from 'next/image';
import styles from '../app/page.module.css';

export default function ProductDisplay({product}) {

    return (
        <div className={styles.productDisplay}>
            <Image className={styles.productImage} src={product.imagePath} width={200} height={200} alt={product.name} />
            <div className={styles.productInfo}>
                <p>{product.name}</p>
                <h3>$ {parseFloat(product.price).toFixed(2)}</h3>
                <div><button className={styles.addCartButton}>Add to Cart</button></div>
            </div>
        </div>
    );
}