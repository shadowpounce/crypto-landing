import React from 'react'

import './CardsLayout.scss'

const CardsLayout = ({ currentScroll }) => {
  const [offsetTop, setOffsetTop] = React.useState(0)

  React.useEffect(() => {
    setOffsetTop(document.querySelector('.cards-layout').offsetTop)
  })

  return (
    <section className="cards-layout">
      <div className="cards-layout-shadow"></div>
      <div className="container">
        <div
          className={`card ${
            currentScroll - 150 >= offsetTop ? 'cardAnim' : ''
          }`}
        >
          <div className="glow"></div>
          <div className="card__content">
            <span>Spot & margin</span>
            <h2>
              Trade <b>200+</b> pairs with up to 10x leverage
            </h2>
            <a href="" className="link">
              Learn more
            </a>
          </div>
        </div>
        <div
          className={`card ${
            currentScroll - 150 >= offsetTop ? 'cardAnim' : ''
          }`}
        >
          <div className="glow"></div>
          <div className="card__content">
            <span>Derivatives</span>
            <h2>40+ quarterly futures and contracts</h2>
            <a href="" className="link">
              Learn more
            </a>
          </div>
        </div>
        <div
          className={`card ${
            currentScroll - 150 >= offsetTop ? 'cardAnim' : ''
          }`}
        >
          <div className="glow"></div>
          <div className="card__content">
            <span>Trading area</span>
            <h2>
              Prize pools worth up to
              <br />
              <big>USD 1,000,000</big>
            </h2>
            <a href="" className="link">
              Learn more
            </a>
          </div>
        </div>
        <div
          className={`card ${
            currentScroll - 150 >= offsetTop ? 'cardAnim' : ''
          }`}
        >
          <div className="glow"></div>
          <div className="card__content">
            <span>mobile app</span>
            <h2>
              Trade anytime,
              <br />
              <big>anywhere</big>
            </h2>
            <a href="" className="link">
              Learn more
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CardsLayout
