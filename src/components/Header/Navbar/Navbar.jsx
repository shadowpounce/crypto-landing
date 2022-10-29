import React from 'react'

import styles from './Navbar.module.scss'

import Button from '../../Button/Button'
import { ReactComponent as Arrow } from '../assets/arrow.svg'
import { ReactComponent as Menu } from '../assets/menu.svg'

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={`container ${styles.container}`}>
        <div className={styles.logo}>C</div>
        <div className={styles.menu}>
          <Menu />
        </div>
        <ul className={styles.navList}>
          <li>Activities</li>
          <li>Technology</li>
          <li>R&D</li>
          <li>Community</li>
        </ul>
        <Button>
          Career
          <Arrow />
        </Button>
      </div>
    </nav>
  )
}

export default Navbar
