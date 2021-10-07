import styles from './Footer.module.css';
import logo from '../assets/images/logo.png'
import React from 'react'

const Footer = () => {
    return (
        <footer>
        <div className={styles.Container}>
            <div className={` ${styles.footerSection} d-flex justify-content-between`}>
                <div className={styles.footerLogo}>
                  <a href="#">  <img src={logo} alt="" /></a>
                </div>
                <div className={styles.About}>
                    <h2>About Us </h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <ul className="d-flex justify-content-between align-items-center">
                        <li><a href="#">
                            <i className="fa fa-twitter"></i>
                        </a></li>
                        <li><a href="#">
                            <i className="fa fa-facebook"></i>
                        </a></li>
                        <li><a href="#">
                            register for updates
                            <i className="fa fa-envelope"></i> 
                        </a></li>
                    </ul>
                </div>
                <div className={`${styles.Communication} ${styles.product}`}>
                    <h2>products</h2>
                    <ul>
                        <li><a href="#">ammunition</a></li>
                        <li><a href="#">ranges</a></li>
                        <li><a href="#">firearms</a></li>
                        <li><a href="#">apparel</a></li>
                    </ul>
                </div>
                <div className={`${styles.Communication}  ${styles.Contact}`}>
                    <h2>contact</h2>
                    <ul>
                        <li><a href="#">info@jcarmsandammo.com</a></li>
                        <li><a href="#">(651)346-9131</a></li>
                        <li><a href="#">send us a message</a></li>
                    </ul>
                </div>
            </div>
                 <div className={styles.FooterPopUp}>
                    <a href="#heroes">
                    <i className="fa fa-chevron-up" ></i> 
                    </a>
                    
                 </div>
        </div>
        
    </footer>
    )
}

export default Footer
