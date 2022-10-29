import React from 'react'

import './Main.scss'

import AboutUs from './AboutUs/AboutUs'
import TheFuture from './TheFuture/TheFuture'
import CardsLayout from './CardsLayout/CardsLayout'
import { ReactComponent as Ellipses } from './assets/ellipses.svg'

import { ReactComponent as Mouse } from './assets/mouse.svg'

const Main = ({ currentScroll }) => {
  return (
    <main className="main">
      <div className="ellipses">
        <Ellipses />
      </div>
      <div
        onClick={() => {
          window.scroll({
            left: 0,
            top: 0,
            behavior: 'smooth',
          })
        }}
        className="mouse-scroll-row"
      >
        <Mouse className="mouse-scroll" />
      </div>
      <AboutUs currentScroll={currentScroll} />
      <TheFuture currentScroll={currentScroll} />
      <CardsLayout currentScroll={currentScroll} />
    </main>
  )
}

export default Main
