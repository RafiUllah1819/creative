import styles from './Bullet.module.css'
import Bullet1 from '../assets/images/bullet1.png'
import Bullet2 from '../assets/images/bullet2.png'
import Bullet3 from '../assets/images/bullet3.png'
import React from 'react'

const Bullet = () => {
    return (
        <div className={styles.Bullet}>
            <div className={styles.Container}>
              <h2>Shop Our Most Popular Ammunition</h2>
                <div className={styles.BulletWrap}>
                    <div className={styles.CardWrap}>
                        <div className={`card ${styles.Card}`}>
                        <div className={`card-body ${styles.CardBody}`}>
                            <h3>.380 ACP</h3>
                        <a href="">Shop .380 Ammo</a>
                        <div className={`card-img ${styles.CardImg}`}>
                            <img src={Bullet1} alt="" />
                        </div>
                        </div>
                        </div>
                    </div>

                    <div className={styles.CardWrap}>
                    <div className={`card ${styles.Card}`}>
                        <div className={`card-body ${styles.CardBody} ${styles.Mid}`}>
                          <h3>9mm Luger</h3>
                          <a href="">Shop 9mm Ammo</a>
                         <div className={`card-img ${styles.CardImg}`}>
                          <img src={Bullet2} alt="" />
                         </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.CardWrap}>
                    <div className={`card ${styles.RightCard} ${styles.Card} `}>
                    <div className={`card-body ${styles.CardBody}`}>
                        <h3>223 <span>(55 Grain)</span></h3>
                        <a href="">Shop .223 Ammo</a>
                       <div className={`card-img ${styles.CardImg}`}>
                        <img src={Bullet3} alt="" />
                       </div>
                    </div>
                </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bullet
