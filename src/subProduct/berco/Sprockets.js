import React, { Fragment } from 'react'
import Footer from '../../components/Footer'
import NavBar from '../../components/NavBar'
import sprokets from './json/sprokets.json'
const Sprockets = () => {
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
								<h3 class="card-title">Sprockets </h3>
								<p>
									Every year we produce over 140,000 drive sprockets and segment
									groups, with a total weight of over 10,000 tons. Both cast and
									drop-forged sprockets are produced via induction inducted over
									the full tooth profile. Then they are machined on vertical
									lathes and drilled in special machining centers. All of this
									is done to extend service life and keep maintenance effort and
									expense low.
								</p>
								<b>Supply range:</b>
								<p class="card-text">
									<ul>
										<li>Drive sprockets, sprocket rims and segment groups</li>
										<li>
											More than 600 different designs available for all chains
											and applications
										</li>
										<li>For tracked vehicles weighing 1 to 330 tons</li>
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
							<h3 class="text-light bg-info">SEGMENT / SPROCKET</h3>
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
									{sprokets.map((data, index) => (
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

export default Sprockets
