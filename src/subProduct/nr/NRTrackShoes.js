import React, { Fragment } from 'react'
import Footer from '../../components/Footer'
import NavBar from '../../components/NavBar'
const NRTrackShoes = () => {
	return (
		<Fragment>
			<NavBar />
			{/* <!-- Page Content --> */}
			<div class="container" style={{ marginTop: 100 }}>
				<div class="row">
					<div class="col-lg-9">
						<div class="card mt-4">
							{/* <img
								class="card-img-top img-fluid"
								src={require('../../assets/sub/Sprockets_1.jpg')}
								alt=""
							/> */}
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

						<div class="card card-outline-secondary my-4">
							<div class="card-header">IDDLERS EXCEL </div>
							<div class="card-body">
								<iframe
									width="100%"
									height="600px"
									src="https://docs.google.com/spreadsheets/d/e/2PACX-1vS56VpxA7lfBVYxQKN_ViPfb0bXtcOvvmxHUGBsLdLiQrOlpI9wER-9ByFS0zGGTg/pubhtml?widget=true&amp;headers=false"
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

export default NRTrackShoes
