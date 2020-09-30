import React, { Fragment } from 'react'

export default function CardDeck({ image, desc, title }) {
  return (
    <Fragment>
      <div class="card">
        <div class="card-body text-center">
          <p>
            <img class="img-fluid" src={image} alt="card image" />
          </p>
          <h4 class="card-title">{title}</h4>
          <p class="card-text">{desc}</p>
        </div>
      </div>
    </Fragment>
  )
}
