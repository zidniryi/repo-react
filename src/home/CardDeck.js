import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

export default function CardDeck({ image, desc, title, link }) {
	return (
		<Fragment>
			<div className="card">
				<Link to={link}>
					<div className="card-body text-center">
						<p>
							<img className="img-fluid" src={image} alt="card image" />
						</p>
						<h4 className="card-title">{title}</h4>
						<p className="card-text">{desc}</p>
					</div>
				</Link>
			</div>
		</Fragment>
	)
}
