import React, { Fragment } from 'react'
import Footer from '../../components/Footer'
import NavBar from '../../components/NavBar'
import index from './json/tooth.json'

const Tooth = () => {
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
								src={require('../../assets/sub/Sprockets_1.jpg')}
								alt=""
							/>
							<div class="card-body">
								<h3 class="card-title">Tooth Bucket, Adapter, etc</h3>
								<p>
									Main products are construction machinery wear-resistant
									parts,including complete series of cutting edges, end bits,
									ripper shanks & adaptors, teeth and side cutters.
								</p>
								<p>
									<ul>
										<li>
											Full range of CAT and KOM excavator tooth bucket system
										</li>
										<li>Full range of CAT and KOM dozer ripper shank system</li>
										<li>OEM and custom designed parts</li>
										<li>One Piece forging techology</li>
									</ul>
								</p>
							</div>
						</div>
						<div>
							<h3 class="text-light bg-info">Tooth Bucket, Adapter, etc</h3>
							<table class="table table-striped">
								<thead class="thead-dark">
									<tr>
										<th scope="col">MODEL</th>
										<th scope="col">PART NUMBER</th>
										<th scope="col">DESCRIPTION</th>
									</tr>
								</thead>
								<tbody>
									{index.map((data, index) => (
										<tr>
											<td>{data.Model}</td>
											<td>{data['Part Number']}</td>
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
					</div>
				</div>
			</div>
			<Footer />
		</Fragment>
	)
}

export default Tooth
