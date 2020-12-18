import React, { Fragment } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

const ServiceCTP = () => {
	return (
		<Fragment>
			<NavBar />
			<div
				className="container"
				style={{ marginTop: 100 + 'px', marginBottom: 100 + 'px' }}
			>
				{/* New */}
				<h2>Services CTS</h2>
				<hr />
				<img
					class="card-img-top img-fluid"
					src={require('../assets/services/cts.jpeg')}
					alt=""
				/>
				<br />
				<br />
				<hr />
				<h3> PAFINDO TRACK SERVICE (PTS) Your undercarriage is an expensive</h3>
				<p>
					investment. It accounts for as much as 20 percent of the price of a
					new track-type machine. Undercarriage can represent as much as 50
					percent of machine maintenance costs. Our goal is to help you keeping
					your undercarriage operating cost per hour as low as possible. That's
					why we developed the Pafindo Track Service (PTS).
				</p>
				<hr />
				<br />
				<h3> OUR EXCELLENT SERVICE:</h3>
				<p>
					<ul>
						<li>
							Have the best training and tools to manage your undercarriage
							system.
						</li>
						<li>
							Regularly inspected and measured the usage of your undercarriage.
						</li>
						<li>
							Preparing reports with maintenance and repair alternatives so that
							you can make early planned decisions to reach the lowest possible
							cost-per-hour.
						</li>
						<li>
							OBTAIN the maximum productivity and maximum undercarriage lifetime
							at a lower hourly cost.
						</li>
						<li>
							Reduce the costs by providing stock and preparing stock on site.
						</li>
						<li>
							Reduce excessive downtime and improve the performance of the unit.
							While there is no substitute for PTS, you play an important role
							in Equally managing your undercarriage system. Understanding how
							your undercarriage works and wears are critical. With the right
							operation and maintenance you can reduce wear and save money.
							Together we build a better working relationship and reducing
							costs.
						</li>
					</ul>
				</p>
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
				<hr />
				<br />
				<h3>PTS</h3>
				{/* Image */}
				<div class="row image-grid">
					<div class="col-sm-4 col-md-4">
						<div class="panel panel-default">
							<div class="panel-body">
								<a href="" target="_blank">
									<img
										alt=""
										class="img-responsive center-block"
										src={require('../assets/services/3.jpg')}
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
										src={require('../assets/services/1.jpeg')}
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
										src={require('../assets/services/2.jpeg')}
										width="300"
									/>
								</a>
							</div>
						</div>
					</div>
				</div>

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

export default ServiceCTP
