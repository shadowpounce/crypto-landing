import React from 'react'

import styles from './Header.module.scss'

import StepsPicture from './assets/steps-picture.png'
import Navbar from './Navbar/Navbar'
import Button from '../Button/Button'
import { ReactComponent as Arrow } from './assets/circle-arrow.svg'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="rectangle-shadow" id="shadow-1"></div>
      <div className={styles.shadowTop}></div>
      <div className={styles.shadowRight}></div>
      <Navbar />
      <main className={styles.headerMain}>
        <img src={StepsPicture} alt="" className={styles.stepsPicture} />
        <div className="container">
          <span className={styles.cryptoTrading}>crypto trading</span>
          <h1>
            Engineers Meet
            <span>
              Traders <b>__</b>
            </span>
          </h1>
          <h2>
            Advanced crypto algorithmic trading and efficient cross-chain
            execution, at scale.
          </h2>
          <div className={styles.btnWrapper}>
            <Button
              onClick={() => {
                window.scroll({
                  left: 0,
                  top: document.querySelector('header').offsetHeight,
                  behavior: 'smooth',
                })
              }}
            >
              Learn More
              <Arrow />
            </Button>
          </div>
        </div>
      </main>
    </header>
  )
}

export default Header
