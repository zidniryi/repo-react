import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

export const CardProduct = () => {
	return (
		<Fragment>
			<div className="col-md-4">
				<Link to="detail-product">
					<div className="card rounded">
						<div className="card-image">
							<img
								className="img-fluid"
								src={require('../../assets/others/tracktor.jpg')}
								alt="Alternate Text"
								style={{ alignSelf: 'center' }}
							/>
						</div>
						<div className="card-image-overlay m-auto">
							<p>
								Berco is know for superior engineering &
								technology. Innovation, comprehensive know how
								and state of the art manufacturing.
							</p>
						</div>
						<div className="card-body text-center">Lihat</div>
					</div>
				</Link>
			</div>
		</Fragment>
	)
}
