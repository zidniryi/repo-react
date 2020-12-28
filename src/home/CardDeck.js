import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

export default function CardDeck({ image, desc, title, link }) {
	return (
		<Fragment>
			<div className="card">
				<div className="card-body text-center">
					<Link to={link}>
						<p>
							<img className="img-fluid" src={image} alt="card image" />
						</p>
					</Link>

					<h4 className="card-title">{title}</h4>
					<p className="card-text">{desc}</p>
				</div>
			</div>
		</Fragment>
	)
}
