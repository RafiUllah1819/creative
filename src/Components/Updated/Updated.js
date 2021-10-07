import styles from './Updated.module.css'

import React from 'react'

const Updated = () => {
    return (
        <div className={styles.Update}>
        <div className={styles.Container}>
           <div className={`${styles.UndateForm}  d-flex justify-content-center`}>
            <span>stay updated</span>
            <form action="" className={`form-inline ${styles.FormInline}`}>
             <div className={`form-group ${styles.FormGroup}`}>
                 <input type="text" className={`form-control ${styles.FormControl}`} placeholder="Enter Your Email to Join the JC Arms $ Ammunition Newsletter" />
                </div>   
            </form>
            <a href="#">join newsletter</a>
        
           </div>
        </div>
    </div>

    )
}

export default Updated
