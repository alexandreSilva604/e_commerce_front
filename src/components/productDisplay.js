import Image from 'next/image';
import styles from '../app/page.module.css';

export default function ProductDisplay({product}) {

    return (
        <div className={styles.productDisplay}>
            <Image className={styles.productImage} src={product.image} width={150} height={150} />
            <p>{product.name}</p>
            <h3>{product.price}</h3>
            <div><button className={styles.addCartButton}>Add to Cart</button></div>
        </div>
    );
}