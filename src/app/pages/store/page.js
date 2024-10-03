'use client'

import styles from '@/app/page.module.css';
import ProductDisplay from '@/components/productDisplay';
import { useEffect, useState } from 'react';

export default function Store() {

    const [products, setProducts] = useState([]);

    function loadProducts() {

        fetch("http://localhost:9000/allProducts")
        .then(r => {
            return r.json();
        })
        .then(r => {
            setProducts(r);
        })
        .catch(e => {
            console.log(e.message);
        });
    }

    const [selectedCategory, setSelectedCategory] = useState("All");
    const categories = ["All", "Bedroom", "Kitchen", "Living Room"];
    
    useEffect(() => {
        loadProducts();
    }, []);

    return (
        <div className={styles.storeMain}>

            <div className={styles.storeCategories}>
                <h2>Categories</h2>
                <div className={styles.categoriesDisplay}>
                    {
                        categories.map((category, index) => {
                            return  <div key={index}>
                                        <button onClick={() => { setSelectedCategory(category) }} className={styles.categoryButton}>
                                            {category}
                                        </button>
                                    </div>
                        })
                    }
                </div>
            </div>
            <div className={styles.storeDisplayProducts}>
                <h1 className={styles.storeTitle}>Store</h1>
                <div className={styles.storeProducts}>
                    {
                        products.length > 0 && (selectedCategory == "All") || products.find((product) => product.category == selectedCategory) ?
                            products.map((product) => {

                                if (selectedCategory == "All" || product.category == selectedCategory) {
                                    return <ProductDisplay key={product.id} product={product} />
                                }
                            })
                        :
                        selectedCategory == "All" ?
                        <h2>There are no products available.</h2>
                        :
                        <h2>There are no products in this category.</h2>
                    }
                </div>
            </div>
        </div>
    )
}