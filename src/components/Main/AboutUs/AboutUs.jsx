import React from 'react'
import Button from '../../Button/Button'

import './AboutUs.scss'

import point1 from '../assets/point-blue.png'
import point2 from '../assets/point-red.png'

const AboutUs = ({ currentScroll }) => {
  const [offsetTop, setOffsetTop] = React.useState(0)

  React.useEffect(() => {
    setOffsetTop(document.querySelector('main').offsetTop)
  })

  return (
    <section className="about-us">
      <div className="container">
        <span
          className={`main__span ${
            currentScroll >= offsetTop ? 'mainAnim' : ''
          }`}
        >
          ABOUT US
        </span>
        <h2
          className={`section__title ${
            currentScroll >= offsetTop ? `mainAnim` : ''
          }`}
        >
          Global technologies
        </h2>
        <div className="wrapper">
          <div className="chart">
            <div className="chart-dotted-lines">
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>
            <div className="chart__lines">
              <div
                className={`line ${
                  currentScroll >= offsetTop ? 'lineAnim' : ''
                }`}
              ></div>
              <div
                className={`line ${
                  currentScroll >= offsetTop ? 'lineAnim' : ''
                }`}
              ></div>
              <div
                className={`line ${
                  currentScroll >= offsetTop ? 'lineAnim' : ''
                }`}
              ></div>
              <div
                className={`line ${
                  currentScroll >= offsetTop ? 'lineAnim' : ''
                }`}
              ></div>
              <div
                className={`line ${
                  currentScroll >= offsetTop ? 'lineAnim' : ''
                }`}
              ></div>
              <div
                className={`line ${
                  currentScroll >= offsetTop ? 'lineAnim' : ''
                }`}
              ></div>
            </div>
            <div className="chart-x">
              <span>10</span>
              <span>20</span>
              <span>30</span>
              <span>40</span>
            </div>
          </div>
          <div className="description">
            <h4>Level 1</h4>
            <div className="row row-1">
              <img src={point1} alt="" />
              <p>
                Deploy a multi-legged futures strategy by simultaneously placing
                orders to buy and sell from the same order ticket.
              </p>
            </div>
            <div className="row row-2">
              <img src={point2} alt="" />
              <p>
                Place and manage orders based on the Level 2 order book, which
                provides a live display of all bids and offers waiting to be
                executed.
              </p>
            </div>
            <Button>Start Now</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
