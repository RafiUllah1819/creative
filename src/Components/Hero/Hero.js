import React from 'react';
import styles from './Hero.module.css';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Hero = () => {
    return (
        <OwlCarousel
        items={1}
        className="owl-theme"
        loop
        autoplay ={false}
        nav
        margin={3}
        dots={false}
        animateOut="fadeOut"
      >
        <div className={styles.Hero}>
         <div className="row">
            <div className="col-12">
            <div class={styles.HeroSlider}>
                <h1>Range Training Services</h1>
                <h2>Lorem Ipsum Dolor Set Amet. Consecutor dolor ipsul set lorem ipsum.</h2>
                <a href="#">schedule now</a>
            
        </div>
            </div>
         </div>
        </div>
        <div className={styles.Hero}>
         <div className="row">
            <div className="col-12">
            <div class={styles.HeroSlider}>
                <h1>Range Training Services</h1>
                <h2>Lorem Ipsum Dolor Set Amet. Consecutor dolor ipsul set lorem ipsum.</h2>
                <a href="#">schedule now</a>
              
        </div>
            </div>
         </div>
        </div>
    </OwlCarousel>
    )
}

export default Hero
