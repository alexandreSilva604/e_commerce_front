'use client'

import styles from '@/app/page.module.css';
import ProductDisplay from '@/components/productDisplay';
import { useState } from 'react';

export default function Store() {

    const [selectedCategory, setSelectedCategory] = useState("All");
    const categories = ["All", "Bedroom", "Kitchen"];
    const products = [{ id: 1, name: "World's Best Boss Mug", price: "$ 10.00", image: "/img/cup.webp", category: "Kitchen" },
                      { id: 2, name: "Table Bedroom", price: "$ 20.00", image: "/img/table.webp", category: "Bedroom" },
                      { id: 3, name: "Fridge", price: "$ 30.00", image: '/img/fridge.jpeg', category: "Kitchen"},
                      { id: 4, name: "Table Kitchen", price: "$ 30.00", image: '/img/table.webp', category: "Kitchen"}];

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
                        products.map((product) => {

                            if (selectedCategory == "All" || product.category == selectedCategory) {
                                return <ProductDisplay key={product.id} product={product} />
                            }
                        })
                    }
                </div>
            </div>
        </div>
    )
}