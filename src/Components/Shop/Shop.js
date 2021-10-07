import styles from './Shop.module.css'

import React from 'react'

const Shop = () => {
    return (
        <div class={styles.Shop}>
        <div class={styles.Container}>
            <div class={styles.ShopSection}>
                <h2>shop jc arms apparel</h2>
                <h3>Logo T-Shirts, Sweatshirts and Hats coming soon!</h3>
                <a href="#">call to action button</a>
            </div>
        </div>
    </div>
    )
}

export default Shop
