import React, { Fragment } from 'react'
import Footer from '../../components/Footer'
import NavBar from '../../components/NavBar'
import index from './json/swingbear.json'
const SwingBearing = () => {
	return (
		<Fragment>
			<NavBar />
			{/* <!-- Page Content --> */}
			<div class="container" style={{ marginTop: 100 }}>
				<div class="row">
					<div class="col-lg-9">
						<div class="card mt-4">
							<img
								class="card-img-top img-fluid"
								src={require('../../assets/sub/OFM_-_swing_bearing_1.png')}
								alt=""
							/>
							<br />
							<img
								class="card-img-top img-fluid"
								src={require('../../assets/sub/OFM_-_swing_bearing_2.png')}
								alt=""
							/>
							<div class="card-body">
								<h3 class="card-title">Swing Bearing </h3>
								<p>
									Swing Bearing by Berco are designed and manufactured for long
									service life, resulting in low hourly operating costs.
									Through-hardened or surface-hardened roll shell bodies
									increase wear resistance and ensure high structural strength
									and resistance to deformation. The seals guarantee permanent
									lubrification for optimum durability.
								</p>
								<b>Supply range:</b>
								<p class="card-text">
									<ul>
										<li>
											More than1,500 different rollers for all types of
											equipment and applications
										</li>
										<li>For tracked vehicles weighing 1 to 330 tons</li>
										<li>
											Single-flange,double-flange and inner flange rollers
										</li>
										<li>
											Versions for extremely cold temperatures (-50°C/-58°F)
											available
										</li>
										<li>
											Versions for extremely cold temperatures (-50°C/-58°F)
											available
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

						<div>
							<h3 class="text-light bg-info">Swing And Bearing</h3>
							<table class="table table-striped">
								<thead class="thead-dark">
									<tr>
										<th scope="col">No</th>
										<th scope="col">Part Number</th>
										<th scope="col">Description</th>
									</tr>
								</thead>
								<tbody>
									{index.map((data, index) => (
										<tr>
											<th scope="row">{data.No}</th>
											<td>{data.PartNumber}</td>
											<td>{data.Description}</td>
										</tr>
									))}
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

export default SwingBearing
