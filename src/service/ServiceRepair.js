import React, { Fragment } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

const ServiceRepair = () => {
	return (
		<Fragment>
			<NavBar />
			<div
				className="container"
				style={{ marginTop: 7 + '%', marginBottom: 100 + 'px' }}
			>
				{/* New */}
				<h2>Services Repair</h2>
				<hr />
				<img
					class="card-img-top img-fluid"
					src={require('../assets/services/Repair_1.jpg')}
					alt=""
				/>
				<br />
				<hr />
				<br />

				<h3>UNDERCARRIAGE REBUILDER WORKSHOP</h3>
				<p>
					Other than providing stocks and PTS system, PT PAFINDO aslo provides
					Undercarriage Rebuilder. We have a workshop facility an area of 1200m2
					to perform:
				</p>
				<p>
					<ul>
						<li>Idler Rebuilder with Automatic Machine</li>
						<li>Shoe Regrouser with Automatic Machine</li>
						<li>Roller Reshelling</li>
						<li>Tungsten Tip Bucket</li>
						<li>Hydraulic Tools until Assembling up to PC2000</li>
					</ul>
				</p>
				{/* Here */}
				<hr />
				<br />
				<h3>Repair</h3>
				{/* Image */}
				<div class="row image-grid">
					<div class="col-sm-4 col-md-4">
						<div class="panel panel-default">
							<div class="panel-body">
								<a href="" target="_blank">
									<img
										alt=""
										class="img-responsive center-block"
										src={require('../assets/services/4.JPG')}
										width="300"
									/>
								</a>
							</div>
						</div>
					</div>
					<div class="col-sm-4 col-md-4">
						<div class="panel panel-default">
							<div class="panel-body">
								<a href="" target="_blank">
									<img
										alt=""
										class="img-responsive center-block"
										src={require('../assets/services/5.JPG')}
										width="300"
									/>
								</a>
							</div>
						</div>
					</div>
					<div class="col-sm-4 col-md-4">
						<div class="panel panel-default">
							<div class="panel-body">
								<a href="" target="_blank">
									<img
										alt=""
										class="img-responsive center-block"
										src={require('../assets/services/6.JPG')}
										width="300"
									/>
								</a>
							</div>
						</div>
					</div>
				</div>

				{/* Image */}
			</div>

			{/* detail */}

			<Footer />
		</Fragment>
	)
}

export default ServiceRepair
