import React, { Fragment } from 'react'
import Footer from '../../components/Footer'
import NavBar from '../../components/NavBar'
import tracklink from './json/tracklink.json'
const TrackLink = () => {
	console.log()
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
								src={require('../../assets/sub/tracklink.jpg')}
								alt=""
							/>
							<div class="card-body">
								<h3 class="card-title">TrackLink </h3>
								<p>
									No matter what size, or in which vehicle they are used,
									heavy-duty chains, greased chains and oil-lubricated chains
									have to be especially robust, durable and easy to maintain
									because they are most often used where the ground is uneven,
									rocky and loose. For this reason, Berco places great emphasis
									on quality in the production of its track chains.
									<br />
									All of our chains are specially developed for the increased
									durability of pins and bushings. We also offer heavy-duty
									chains with extremely wear-resistant bushings for maximum
									service life in applications with intense abrasion.
								</p>
								<b>Supply range:</b>
								<p class="card-text">
									<ul>
										<li>
											Heavy-duty chains with extremely wear-resistant components
										</li>
										<li>For bulldozers and tracked loaders</li>
										<li>For bulldozers and tracked loaders</li>
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
							<h3 class="text-light bg-info">TrackLink</h3>
							<table class="table table-striped">
								<thead class="thead-dark">
									<tr>
										<th scope="col">No</th>
										<th scope="col">OEM PARTNO</th>
										<th scope="col">BERCO PARTNO</th>
										<th scope="col">Description</th>
										<th scope="col">MODEL UNIT</th>
									</tr>
								</thead>
								<tbody>
									{tracklink.map((data, index) => (
										<tr>
											<th scope="row">{data.NO}</th>
											<td>{data['OEM PARTNO']}</td>
											<td>{data['BERCO PARTNO']}</td>
											<td>{data.DESCRIPTION}</td>
											<td>{data['MODEL UNIT']}</td>
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

export default TrackLink
