import React, { Fragment } from 'react'
import Footer from '../../components/Footer'
import NavBar from '../../components/NavBar'
import index from './json/trackshoes.json'
const NRTrackShoes = () => {
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
								src={require('../../assets/sub/Trachshoes.jpg')}
								alt=""
							/>
							<div class="card-body">
								<h3 class="card-title">TrackShoes </h3>
								<p>
									Extreme applications, such as those often required in the
									mining industry, require specially forged track shoes. They
									need high bending strength, breaking strength, maximum wear
									resistance and toughness to guarantee long service life. For
									this reason, track shoes by Berco are through-hardened and
									stress-free annealed.
									<br />
									We offer track shoes for bulldozers with chain pitches of up
									to 317.5 mm and track shoes for large excavators with chain
									pitches of up to 350 mm.
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
							<h3 class="text-light bg-info">Trackshoes</h3>
							<table class="table table-striped">
								<thead class="thead-dark">
									<tr>
										<th scope="col">No</th>
										<th scope="col">OEM PARTNO</th>
										<th scope="col">Description</th>
										<th scope="col">MODEL UNIT</th>
									</tr>
								</thead>
								<tbody>
									{index.map((data, index) => (
										<tr>
											<th scope="row">{data.NO}</th>
											<td>{data['OEM PARTNO']}</td>
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

export default NRTrackShoes
