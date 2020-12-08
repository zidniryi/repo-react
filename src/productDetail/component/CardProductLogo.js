import React, { Fragment } from 'react'

const CardProductLogo = ({ image, desc, title, newLine }) => {
	return (
		<Fragment>
			<div class="col-xs-12 col-sm-6 col-md-4">
				<div class="image-flip">
					<div class="mainflip flip-0">
						<div class="frontside">
							<div class="card">
								<div class="card-body text-center">
									<p>
										<img
											class="img-fluid"
											src={image}
											alt="card image"
										/>
									</p>
									<h4 class="card-title">{title}</h4>
									{newLine ? <br /> : null}

									<p class="card-text">{desc}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	)
}

export default CardProductLogo
