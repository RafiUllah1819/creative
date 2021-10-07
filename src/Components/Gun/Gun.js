import styles from './Gun.module.css';
import React from 'react'
import Bullet from '../assets/images/bullet.png'
import Ammunition from '../assets/images/ammunition-img.png'
import Range from '../assets/images/range-img.png'
import FireArm from '../assets/images/firearms-img.png'

const Gun = () => {
    return (
        <div>
    <div className={styles.Gun}>
        <div className={styles.GunTop}>
                <h2>JC Arms & Ammunition is a custom arms and ammunition manufacturer offering high quality training and range ammunition and firearm related services.</h2>
        </div>
        <div className={styles.GunMid}>
            <div className={styles.Container}>
                <div className={`${styles.GunInfo} d-flex justify-content-between`}>
                    <div className={styles.GunLeft}>
                        <h3>
                            Integrity • Responsibility • Quality  
                        </h3>
                        <p>The mission of JC Arms & Ammunition is to offer a wide range of high quality products and services to recreational shooters, law enforcement entities, tactical training companies and DOD critical contractors to help individuals train, perfect their craft and become more proficient.</p>
                        
                    </div>
                    <div className={`${styles.GunRight} d-flex`}>
                        <div className={styles.GunImg}><img src={Bullet}/></div>
                        <div className={styles.GunImg}><img src={Bullet}/></div>
                        <div className={styles.GunImg}><img src={Bullet}/></div>
                        <div className={styles.GunImg}><img src={Bullet}/></div>
                        
                    </div>
                </div>
                <div className={`${styles.CardSection} d-flex text-center`}>
                    <div className={`card ${styles.Card}`}>
                        <div className={`card-body ${styles.CardBody}`}>
                            <h3>ammunition</h3>
                            <div className={`card-img ${styles.CardImg}`}>
                                <img src={Ammunition} alt="" />
                            </div>
                            <a href="#">shop ammunition</a>
                        </div>
                    </div>
                    <div className={`card ${styles.Card}`}>
                        <div className={`card-body ${styles.CardBody}`}>
                            <h3>range services</h3>
                           <div className={`card-img ${styles.CardImg}`}>
                            <img src={Range} alt="" />
                           </div>
                            <a href="#">learn more</a>
                        </div>
                    </div>
                    <div className={`card ${styles.Card}`}>
                        <div className={`card-body ${styles.CardBody}`}>
                            <h3>firearms</h3>
                           <div className={`card-img ${styles.CardImg}`}>
                            <img src={FireArm} alt="" />
                           </div>
                            <a href="#">shop firearms</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
    </div>
        </div>
    )
}

export default Gun
