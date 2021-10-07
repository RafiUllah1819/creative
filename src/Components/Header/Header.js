import React from 'react'
import logo from '../assets/images/logo.png';
import styles from './Header.module.css'

const Header = () => {
    return (

    <header>
        {/* <div className="alert  alert-dismissible fade show header-top">
            <button type="button" className="close" data-dismiss="alert">&times;</button>
            <p>Enjoy Our New Website! This can be News As well!</p>
          </div> */}
        <div className="header-mid">
            <div className='container'>
            {/* <div className="collapse navbar-collapse">
                <ul className=" d-flex  navbar">
                    <li><a href="#">
                        <i className="fab fa-twitter"></i>
                    </a></li>
                    <li><a href="#">
                        <i className="fab fa-facebook-f"></i>
                    </a></li>
                    
                      <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                            <i className="fas fa-shopping-cart"> 0</i><i className="fal fa-chevron-down"></i>
                        </a>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="#">Link 1</a>
                          <a className="dropdown-item" href="#">Link 2</a>
                          <a className="dropdown-item" href="#">Link 3</a>
                        </div>
                      </li>
                      <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                            <i className="fas fa-search"></i><i className="fal fa-chevron-down"></i>
                        </a>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="#">Link 1</a>
                          <a className="dropdown-item" href="#">Link 2</a>
                          <a className="dropdown-item" href="#">Link 3</a>
                        </div>
                      </li>
                </ul>
            </div> */}
            </div>
        </div>
        <div className={styles.HeaderMain}>
            <div className={styles.Container}>
                <nav className="navbar navbar-expand-md ">
                    <a className={styles.NavBrand} href="#"><img src={logo} alt="" /></a>
                   <button className="navbar-toggler"onclick="myFunction(this)"  type="button" data-toggle="collapse" data-target="#collapsibleNavbar" >
                    <span></span>
                    <span></span>
                    <span></span>
                  </button>
                    <div className={`collapse navbar-collapse justify-content-end ${styles.NavbarNav}`} id="collapsibleNavbar">
                      <ul className="navbar-nav">
                       <li className="nav-item">
                           <a className={`${styles.NavLink}`} aria-current="page" href="#">Home</a>
                         </li>
                         <li className="nav-item">
                           <a className={`${styles.NavLink}`} aria-current="page" href="#">About</a>
                         </li>
                        <li className="nav-item dropdown">
                          <a className={` dropdown-toggle ${styles.NavLink}`} href="#" id="navbardrop" data-toggle="dropdown">
                            Products<i className="fal fa-chevron-down"></i>
                          </a>
                          <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">Link 1</a>
                            <a className="dropdown-item" href="#">Link 2</a>
                            <a className="dropdown-item" href="#">Link 3</a>
                          </div>
                        </li>
          
                        <li className="nav-item dropdown">
                          <a className={` dropdown-toggle ${styles.NavLink}`} href="#" id="navbardrop" data-toggle="dropdown">
                            Services<i className="fal fa-chevron-down"></i>
                          </a>
                          <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">Link 1</a>
                            <a className="dropdown-item" href="#">Link 2</a>
                            <a className="dropdown-item" href="#">Link 3</a>
                          </div>
                        </li>
          
                        <li className="nav-item">
                          <a className={`${styles.NavLink}`} aria-current="page" href="#">Rebates</a>
                        </li>
                        <li className="nav-item">
                          <a className={` ${styles.NavLink}`} aria-current="page" href="#">Become a Distributor</a>
                        </li>
                        <li className="nav-item">
                           <a className={`${styles.NavLink}`} aria-current="page" href="#">Contact Us</a>
                         </li>
                      </ul>
                    </div>
                </nav>
            </div>
    
        </div>
    </header>
 
    )
}

export default Header
