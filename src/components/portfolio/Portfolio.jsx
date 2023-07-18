import React from 'react'
import './portfolio.css'
import IMG1 from '../../asset/img1.jpg'
import IMG2 from '../../asset/img2.jpg'
import IMG3 from '../../asset/img3.jpg'
import IMG4 from '../../asset/img4.jpg'
import IMG5 from '../../asset/img5.jpg'
import IMG6 from '../../asset/img6.png'

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Title for portfolio</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com" className="btn" target='_blank'>Github</a>
          <a href="https://dribbble.com/Alien_pixels" className="btn btn-primary" target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>Title for portfolio</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com" className="btn" target='_blank'>Github</a>
          <a href="https://dribbble.com/Alien_pixels" className="btn btn-primary" target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>Title for portfolio</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com" className="btn" target='_blank'>Github</a>
          <a href="https://dribbble.com/Alien_pixels" className="btn btn-primary" target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>Title for portfolio</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com" className="btn" target='_blank'>Github</a>
          <a href="https://dribbble.com/Alien_pixels" className="btn btn-primary" target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>Title for portfolio</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com" className="btn" target='_blank'>Github</a>
          <a href="https://dribbble.com/Alien_pixels" className="btn btn-primary" target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG6} alt="" />
          </div>
          <h3>Title for portfolio</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com" className="btn" target='_blank'>Github</a>
          <a href="https://dribbble.com/Alien_pixels" className="btn btn-primary" target='_blank'>Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio