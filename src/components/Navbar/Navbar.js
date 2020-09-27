import React from 'react'
import styles from './Navbar-styles.module.css'
import bullIcon from '../../assets/bulleye.svg'

export default function Navbar () {
  return (
    <header>
      <div className={styles.container}>
        <h1 className={styles.logo}>
          <img src={bullIcon} className={styles.bullLogo} />
          Bull.Eye
        </h1>
        <input type={styles.checkbox} id={styles.menubar} />
        <label className={styles.fontawesomeAlignJustify} htmlFor={styles.menubar} />
        <nav className={styles.menu}>
          <a href='/'>Home</a>
        </nav>
      </div>
    </header>
  )
}
