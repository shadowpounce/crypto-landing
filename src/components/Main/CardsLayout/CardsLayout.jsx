import React from 'react'

import './CardsLayout.scss'

const CardsLayout = ({ currentScroll }) => {
  const [offsetTop, setOffsetTop] = React.useState(0)
  const [cardsLayout, setCardsLayout] = React.useState(0)

  React.useEffect(() => {
    setOffsetTop(document.querySelector('.cards-layout').offsetTop)
  })

  React.useEffect(() => {
    setCardsLayout(document.querySelector('.cards-layout'))
  }, [])

  function blurAllCards(card) {
    document
      .querySelectorAll('.card')
      .forEach((card) => (card.style.filter = `blur(5px)`))
  }

  function showAllCards() {
    document
      .querySelectorAll('.card')
      .forEach((card) => (card.style.filter = `none`))
  }

  cardsLayout
    ? cardsLayout
        .querySelector('.container')
        .addEventListener('mousemove', (e) => {
          if (e.target.classList.contains('card__content')) {
            blurAllCards()
            e.target.closest('.card').style.filter = `none`
          } else {
            showAllCards()
          }
        })
    : void 0

  return (
    <section className="cards-layout">
      <div className="cards-layout-shadow"></div>
      <div className="container">
        <div
          className={`card-wrapper ${
            currentScroll - 150 >= offsetTop ? 'cardAnim' : ''
          }`}
        >
          <div className={`card`}>
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
        </div>
        <div
          className={`card-wrapper ${
            currentScroll - 150 >= offsetTop ? 'cardAnim' : ''
          }`}
        >
          <div className={`card`}>
            <div className="glow"></div>
            <div className="card__content">
              <span>Derivatives</span>
              <h2>40+ quarterly futures and contracts</h2>
              <a href="" className="link">
                Learn more
              </a>
            </div>
          </div>
        </div>
        <div
          className={`card-wrapper ${
            currentScroll - 150 >= offsetTop ? 'cardAnim' : ''
          }`}
        >
          <div className={`card`}>
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
        </div>
        <div
          className={`card-wrapper ${
            currentScroll - 150 >= offsetTop ? 'cardAnim' : ''
          }`}
        >
          <div className={`card`}>
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
      </div>
    </section>
  )
}

export default CardsLayout
