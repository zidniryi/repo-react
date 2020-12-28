import React, { Fragment } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

const ProductDetailAll = () => {
	return (
		<Fragment>
			<NavBar />
			{/* <!-- Page Content --> */}
			<div class="container" style={{ marginTop: 100 }}>
				<div class="row">
					<div class="col-lg-3">
						<h1 class="my-4">UCR BERCO</h1>
						<div class="list-group">
							<Link to="/sub-tracklink" class="list-group-item active">
								Tracklink
							</Link>
							<Link to="/sub-trackshoes" class="list-group-item active">
								Trackshoes
							</Link>
							<Link to="/sub-rollers" class="list-group-item active">
								Rollers
							</Link>
							<Link to="/sub-idlers" class="list-group-item active">
								Idlers
							</Link>
							<Link to="/sub-sprockets" class="list-group-item active">
								Sprockets
							</Link>
						</div>
					</div>
					{/* <!-- /.col-lg-3 --> */}

					<div class="col-lg-9">
						<div class="card mt-4">
							<img
								class="card-img-top img-fluid"
								src={require('../assets/others/Berco_03.jpg')}
								alt=""
							/>
							<div class="card-body">
								<h3 class="card-title">UCR BERCO </h3>
								<p>
									Improvement with Berco Pin Retention System ( BPR2 ) Class
									Dozer D375, D8R, D9R, D10R
								</p>
								<b>Main features:</b>
								<p class="card-text">
									<ul>
										<li>
											Completely new and improved seals, designed by Berco with
											materials suitable for an extended working temperature
											range and improved wear performance when coupled with the
											bushing ends;
										</li>
										<li>
											New pin retention system to ensure all joints are sealed
											to predetermined end–play specification;
										</li>
										<li>Optimized pin – link interference;</li>
										<li>Optimized pin – link interference;</li>
										<li>
											Full interchangeability with OEM parts also at
											subcomponent level.
										</li>
									</ul>
								</p>
								{/* <span class="text-warning">
									&#9733; &#9733; &#9733; &#9733; &#9734;
								</span> */}
								{/* 4.0 stars */}
							</div>
						</div>
						{/* <!-- /.card --> */}

						<div class="card card-outline-secondary my-4">
							<div class="card-header">Main benefits:</div>
							<div class="card-body">
								<p>
									<ul>
										<li>Longer joint life;</li>
										<li>Improved serviceability & easy maintenance;</li>
										<li>Ultimately, significantly improved total cost/hour.</li>
									</ul>
								</p>
								{/* <a href="#" class="btn btn-success">
									Leave a Review
								</a> */}
							</div>
						</div>

						<div class="card card-outline-secondary my-4">
							<div class="card-body">
								<table class="table table-striped">
									<thead class="thead-dark">
										<tr>
											<th scope="col">No</th>
											<th scope="col">PartNumber</th>
											<th scope="col">Description</th>
										</tr>
									</thead>
									<thead class="thead-light">
										<tr>
											<th scope="col"></th>
											<th scope="col">
												<i>
													<u>TRACK FRAME - SUSPENSION BOGIE</u>
												</i>
											</th>
											<th scope="col"></th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<th scope="row">1</th>
											<td>195-30-62141-OFM</td>
											<td>CAP ROLLER (D375)</td>
										</tr>
										<tr>
											<th scope="row">2</th>
											<td>195-30-66510-OFM</td>
											<td>195-30-66520-OFM</td>
										</tr>
										<tr>
											<th scope="row">3</th>
											<td>195-30-66520-OFM</td>
											<td>BOGIE AS. MINOR</td>
										</tr>
										<tr>
											<th scope="row">4</th>
											<td>195-30-66550-OFM</td>
											<td>BOGIE AS. FRONT</td>
										</tr>
										<tr>
											<th scope="row">5</th>
											<td>195-30-66531-OFM</td>
											<td>PAD BOGIE (D375)</td>
										</tr>
										<tr>
											<th scope="row">6</th>
											<td>195-30-66580-OFM</td>
											<td>COVER</td>
										</tr>
										<tr>
											<th scope="row">7</th>
											<td>195-30-67230-OFM</td>
											<td>GUIDE BOGIE</td>
										</tr>
										<tr>
											<th scope="row">8</th>
											<td>195-50-22190-OFM</td>
											<td>BUSHING TRACK FRAME</td>
										</tr>
										<tr>
											<th scope="row">9</th>
											<td>195-50-22210-OFM</td>
											<td>BUSHING</td>
										</tr>
										<tr>
											<th scope="row">10</th>
											<td>195-50-41140-OFM</td>
											<td>BUSHING</td>
										</tr>
										<tr>
											<th scope="row">11</th>
											<td>198-30-56132-OFM</td>
											<td>PAD BOGIE</td>
										</tr>
										<tr>
											<th scope="row">12</th>
											<td>195-30-31221-OFM</td>
											<td>BUSHING</td>
										</tr>
										<tr>
											<th scope="row">13</th>
											<td>195-30-34121-OFM</td>
											<td>BUSHING SLEEVE</td>
										</tr>
									</tbody>
									<thead class="thead-light">
										<tr>
											<th scope="col"></th>
											<th scope="col">
												<i>
													<u>EQUALIZER BAR</u>
												</i>
											</th>
											<th scope="col"></th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<th scope="row">14</th>
											<td>195-50-00182-OFM</td>
											<td>EQUALIZER BAR)</td>
										</tr>
										<tr>
											<th scope="row">15</th>
											<td>195-50-41120-OFM</td>
											<td>SHAFT EQ</td>
										</tr>
										<tr>
											<th scope="row">16</th>
											<td>195-50-41132-OFM</td>
											<td>CENTRAL BUSHING EQ</td>
										</tr>
										<tr>
											<th scope="row">17</th>
											<td>195-50-41161-OFM</td>
											<td>SPH BUSHING EQ</td>
										</tr>
										<tr>
											<th scope="row">18</th>
											<td>195-50-41170-OFM</td>
											<td>SEAL EQ</td>
										</tr>
										<tr>
											<th scope="row">19</th>
											<td>195-50-51150-OFM</td>
											<td>SHAFT EQ</td>
										</tr>
									</tbody>
									<thead class="thead-light">
										<tr>
											<th scope="col"></th>
											<th scope="col">
												<i>
													<u>PIVOT SHAFT</u>
												</i>
											</th>
											<th scope="col"></th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<th scope="row">20</th>
											<td>195-50-42111-OFM</td>
											<td>SHAFT FINAL DRIVE</td>
										</tr>
										<tr>
											<th scope="row">21</th>
											<td>195-50-22151-OFM</td>
											<td>SEAL</td>
										</tr>
									</tbody>
									<thead class="thead-light">
										<tr>
											<th scope="col"></th>
											<th scope="col">
												<i>
													<u>TRUNION TILT FRAME</u>
												</i>
											</th>
											<th scope="col"></th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<th scope="row">22</th>
											<td>195-71-51191-OFM</td>
											<td>TRUNION TILT FRAME</td>
										</tr>
										<tr>
											<th scope="row">23</th>
											<td>195-50-22151-OFM</td>
											<td>CAP</td>
										</tr>
										<tr>
											<th scope="row">24</th>
											<td>195-71-61291-OFM</td>
											<td>JOINT</td>
										</tr>
										<tr>
											<th scope="row">25</th>
											<td>195-71-61380-OFM</td>
											<td>SHAFT (D375)</td>
										</tr>
										<tr>
											<th scope="row">26</th>
											<td>195-71-61630-OFM</td>
											<td>SHAFT</td>
										</tr>
									</tbody>
									<thead class="thead-light">
										<tr>
											<th scope="col"></th>
											<th scope="col">
												<i>
													<u>TTILT FRAME - U BLADE</u>
												</i>
											</th>
											<th scope="col"></th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<th scope="row">27</th>
											<td>195-71-61590-OFM</td>
											<td>SHAFT</td>
										</tr>
										<tr>
											<th scope="row">28</th>
											<td>195-50-22151-OFM</td>
											<td>SHAFT</td>
										</tr>
										<tr>
											<th scope="row">29</th>
											<td>1195-71-71220-OFM</td>
											<td>BUSHING</td>
										</tr>
										<tr>
											<th scope="row">30</th>
											<td>195-71-74160-OFM</td>
											<td>BRACKET</td>
										</tr>
										<tr>
											<th scope="row">31</th>
											<td>195-71-74250-OFM</td>
											<td>BUSHING TILT FRAME</td>
										</tr>
										<tr>
											<th scope="row">32</th>
											<td>195-71-74270-OFM</td>
											<td>BUSHING TILT FRAME</td>
										</tr>
										<tr>
											<th scope="row">33</th>
											<td>198-72-62130-OFM</td>
											<td>SHAFT</td>
										</tr>
										<tr>
											<th scope="row">34</th>
											<td>198-72-62140-OFM</td>
											<td>SHAFT</td>
										</tr>
										<tr>
											<th scope="row">35</th>
											<td>198-72-62190-OFM</td>
											<td>BUSHING</td>
										</tr>
									</tbody>
									<thead class="thead-light">
										<tr>
											<th scope="col"></th>
											<th scope="col">
												<i>
													<u>RIPPER (BEAM & ARM )</u>
												</i>
											</th>
											<th scope="col"></th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<th scope="row">36</th>
											<td>195-78-71170-OFM</td>
											<td>SHAFT</td>
										</tr>
										<tr>
											<th scope="row">37</th>
											<td>195-78-71180-OFM</td>
											<td>SHAFT</td>
										</tr>
										<tr>
											<th scope="row">38</th>
											<td>195-78-71190-OFM</td>
											<td>SHAFT (D375)</td>
										</tr>
										<tr>
											<th scope="row">39</th>
											<td>195-78-71210-OFM</td>
											<td>SHAFT BUCKET (D375)</td>
										</tr>
										<tr>
											<th scope="row">40</th>
											<td>195-78-73180-OFM</td>
											<td>SHAFT</td>
										</tr>
									</tbody>
								</table>
								<p style={{ color: 'red' }}>
									<u>
										<i>
											<b>
												For other part numbers not found in this list, please
												contact us
											</b>
										</i>
									</u>
								</p>

								{/* <a href="#" class="btn btn-success">
									Leave a Review
								</a> */}
							</div>
						</div>
						{/* <!-- /.card --> */}
					</div>
					{/* <!-- /.col-lg-9 --> */}
				</div>
			</div>
			<Footer />
		</Fragment>
	)
}

export default ProductDetailAll
