import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

export const CardProduct = () => {
  return (
    <Fragment>
      <div className="col-md-4">
        <div className="card rounded">
          <div className="card-image">
            <img
              className="img-fluid"
              src="https://www.costex.com/wp-content/uploads/2019/12/abc-gasket-kits-header-1-1536x768.jpg"
              alt="Alternate Text"
              style={{ alignSelf: 'center' }}
            />
          </div>
          <div className="card-image-overlay m-auto">
            <p>
              The ABC GASKET KITS program is designed to consolidate popular
              gaskets and make it easy to order.
            </p>
          </div>
          <div className="card-body text-center">
            <Link className="ad-btn" to="detail-product">
              Lihat
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
