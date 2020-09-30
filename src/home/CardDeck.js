import React, { Fragment } from 'react'

export default function CardDeck({ image, desc, title }) {
  return (
    <Fragment>
      <div className="card">
        <div className="card-body text-center">
          <p>
            <img className="img-fluid" src={image} alt="card image" />
          </p>
          <h4 className="card-title">{title}</h4>
          <p className="card-text">{desc}</p>
        </div>
      </div>
    </Fragment>
  )
}
