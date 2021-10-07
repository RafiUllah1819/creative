import styles from './Flag.module.css';
import React from 'react'
import FlagImg from '../assets/images/flag.png'

const Flag = () => {
    return (
        <div className={styles.Flag}>
        <div className={styles.Container}>
            <div className={`${styles.FlagSection} d-flex justify-content-between `}>
                <div className={styles.FlagLeft}>
                    <h2>Send Us Your Hero of The Month Submission</h2>
                    <p>This is some text about the JC Arms & Ammunition Hero of the Month feature. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                <a href="#">Nominate a Hero of the Month!</a>
                </div>
                <div className={styles.FlagRight}>
                    <img src={FlagImg} alt="" />
                </div>
            </div>
        </div>
    </div>
    )
}

export default Flag
