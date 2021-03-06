import React, { Fragment } from 'react'
import Footer from '../../components/Footer'
import NavBar from '../../components/NavBar'
import index from './json/cutting.json'

const CuttingEdge = () => {
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
								<h3 class="card-title">Cutting Edge and End Bit</h3>
								<p>
									Main products are construction machinery wear-resistant
									parts,including complete series of cutting edges, end bits,
									ripper shanks & adaptors, teeth and side cutters.
								</p>
								<p>
									<ul>
										<li>Full range of cutting edges and end bits</li>
										<li>OEM and custom designed parts</li>
										<li>Boron steel and carbon steel</li>
									</ul>
								</p>
							</div>
						</div>
						<div>
							<h3 class="text-light bg-info">Cutting Edge and End Bit</h3>
							<table class="table table-striped">
								<tbody>
									{index.map((data, index) => (
										<tr>
											<td>{data.__3}</td>
											<td>{data.__4}</td>
											<td>{data.__5}</td>
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

export default CuttingEdge
