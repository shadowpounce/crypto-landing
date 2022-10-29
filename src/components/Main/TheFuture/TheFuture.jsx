import React from 'react'

import './TheFuture.scss'
import { ReactComponent as SchemeLogo } from '../assets/scheme-logo.svg'
import { ReactComponent as ArrowVector } from '../assets/arrow-vector.svg'

const TheFuture = ({ currentScroll }) => {
  const [offsetTop, setOffsetTop] = React.useState(0)

  React.useEffect(() => {
    setOffsetTop(document.querySelector('.the-future').offsetTop)
  })

  return (
    <section className="the-future">
      <div className="shadow" id="the-future-shadow-1"></div>
      <div className="shadow" id="the-future-shadow-2"></div>
      <div className="shadow" id="the-future-shadow-3"></div>
      <div className="container">
        <div
          className={`scheme ${
            currentScroll - 100 >= offsetTop ? 'schemeAnim' : ''
          }`}
        >
          <div className="box box-1">
            <span>
              <div className="inner-bg">Artificial Intelligence</div>
            </span>
            <div className="mobile-row">
              <span>
                <div className="inner-bg">Storage Networks</div>
              </span>
              <span>
                <div className="inner-bg">P2P Networks</div>
              </span>
            </div>
            <span id="span-2">
              <div className="inner-bg">Storage Networks</div>
            </span>
            <span id="span-3">
              <div className="inner-bg">P2P Networks</div>
            </span>
          </div>
          <div className="middle-box">
            <div className="mobile-lines"></div>
            <span>
              <div className="inner-bg">Public Data</div>
            </span>
            <span>
              <div className="inner-bg">Encrypted Private Data *</div>
            </span>
          </div>
          <div className="box box-2">
            <div className="group">
              <div className="arrows">
                <div className="arrow arrow-1">
                  <div className="line"></div>
                  <ArrowVector />
                </div>
                <div className="arrow arrow-2">
                  <ArrowVector />
                  <div className="line"></div>
                </div>
              </div>
              <p className="text-under-arrows">Consumers</p>
            </div>
            <div className="mobile-row">
              <span id="span-1">
                <div className="inner-bg">Indexing</div>
              </span>
              <span>
                <div className="inner-bg">API</div>
              </span>
            </div>
            <SchemeLogo className="scheme-logo" />
            <p>
              Easy to use digital service and exclusive personal service for our
              active traders
            </p>
            <span id="span-1">
              <div className="inner-bg">Indexing</div>
            </span>
            <span>
              <div className="inner-bg">API</div>
            </span>
          </div>
        </div>
        <div className="description">
          <h2
            className={
              currentScroll - 100 >= offsetTop ? 'descriptionAnim' : ''
            }
          >
            The future Cryptocurrency trading
            <b>platform</b>
          </h2>
          <p
            className={
              currentScroll - 100 >= offsetTop ? 'descriptionAnim' : ''
            }
          >
            Take advantage of time and sales, futures spread orders and depth
            trader — plus, trade directly from charts.
          </p>
          <a
            href="#learn-more"
            className={`link ${
              currentScroll - 100 >= offsetTop ? 'descriptionAnim' : ''
            }`}
          >
            Learn more
          </a>
        </div>
      </div>
    </section>
  )
}

export default TheFuture
