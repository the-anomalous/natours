import React from 'react'
import TourCard from './cards/tour-card.component'
import ButtonGreen from './buttons/button-green.component'
import ButtonWhite from './buttons/button-white.component'

const Tours = () => {
  return (
    <section className="section-tours">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">
          most popular tours
        </h2>
      </div>

      <div className="row">
        <TourCard>
          <div className="card__slide card__slide--back card__slide--back--1">
            <div className="card__cta">
              <div className="price__box">
                <p className="price__box-only">only</p>
                <p className="price__box-value">$297</p>
              </div>

              <ButtonWhite>Book Now</ButtonWhite>
            </div>
          </div>

          <div className="card__slide card__slide--front">
            <div className="card__picture card__picture--1" />

            <h4 className="card__heading">
              <span className="card__heading-span card__heading-span--1">
                the sea explorer
              </span>
            </h4>

            <div className="card__details">
              <ul>
                <li>3 days tour</li>
                <li>Upto 30 people</li>
                <li>2 tour guides</li>
                <li>Sleep in cozy hotels</li>
                <li>Difficulty: very easy</li>
              </ul>
            </div>
          </div>
        </TourCard>

        <TourCard>
          <div className="card__slide card__slide--back card__slide--back--2">
            <div className="card__cta">
              <div className="price__box">
                <p className="price__box-only">only</p>
                <p className="price__box-value">$497</p>
              </div>

              <ButtonWhite>Book Now</ButtonWhite>
            </div>
          </div>

          <div className="card__slide card__slide--front">
            <div className="card__picture card__picture--2" />

            <h4 className="card__heading">
              <span className="card__heading-span card__heading-span--2">
                the sea explorer
              </span>
            </h4>

            <div className="card__details">
              <ul>
                <li>7 days tour</li>
                <li>Upto 40 people</li>
                <li>6 tour guides</li>
                <li>Sleep in provided tents</li>
                <li>Difficulty: medium</li>
              </ul>
            </div>
          </div>
        </TourCard>

        <TourCard>
          <div className="card__slide card__slide--back card__slide--back--3">
            <div className="card__cta">
              <div className="price__box">
                <p className="price__box-only">only</p>
                <p className="price__box-value">$897</p>
              </div>

              <ButtonWhite>Book Now</ButtonWhite>
            </div>
          </div>

          <div className="card__slide card__slide--front">
            <div className="card__picture card__picture--3" />

            <h4 className="card__heading">
              <span className="card__heading-span card__heading-span--3">
                the sea explorer
              </span>
            </h4>

            <div className="card__details">
              <ul>
                <li>5 days tour</li>
                <li>Upto 15 people</li>
                <li>3 tour guides</li>
                <li>Sleep in provide tents</li>
                <li>Difficulty: hard</li>
              </ul>
            </div>
          </div>
        </TourCard>
      </div>

      <div className="u-center-text">
        <ButtonGreen>discover our tours</ButtonGreen>
      </div>
    </section>
  )
}

export default Tours
