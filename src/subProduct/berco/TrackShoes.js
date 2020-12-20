import React, { Fragment } from 'react'
import Footer from '../../components/Footer'
import NavBar from '../../components/NavBar'
const TrackShoes = () => {
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
								src={require('../../assets/sub/trackshoes_1.jpg')}
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
										<li>Over 70 different sections with 1, 2 and 3 grousers</li>
										<li>
											Large selection of track shoe designs: different lengths,
											mounting surfaces, angular and tapered grousers, etc.
										</li>
										<li>Special shoes: swamp shoes, flat shoes</li>
										<li>Special shoes: swamp shoes, flat shoes</li>
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
							<div class="card-header">TRACKSHOES EXCEL </div>
							<div class="card-body">
								<iframe
									width="100%"
									height="600px"
									src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQoRv90l5zbbNyE8SVRMWsJx3ZEQzx9CiRmvroWb7mAJR7gmikSVbaMIqdXSldBHg/pubhtml?widget=true&amp;headers=false"
								></iframe>
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

export default TrackShoes
