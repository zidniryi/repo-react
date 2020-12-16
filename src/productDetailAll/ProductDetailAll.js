import React, { Fragment } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import PDF1 from './pdf/berco1.pdf'
import PDF2 from './pdf/berco2.pdf'
import PDF3 from './pdf/berco3.pdf'

const ProductDetailAll = () => {
	return (
		<Fragment>
			<NavBar />
			{/* <!-- Page Content --> */}
			<div class="container" style={{ marginTop: 100 }}>
				<div class="row">
					<div class="col-lg-3">
						<h1 class="my-4">PARTS</h1>
						<div class="list-group">
							<a
								href={PDF1}
								target="_blank"
								class="list-group-item active"
							>
								Tracklink
							</a>
							<a
								href={PDF2}
								target="_blank"
								class="list-group-item active"
							>
								Trackshoes
							</a>
							<a
								href={PDF3}
								target="_blank"
								class="list-group-item active"
							>
								Rollers
							</a>
						</div>
					</div>
					{/* <!-- /.col-lg-3 --> */}

					<div class="col-lg-9">
						<div class="card mt-4">
							<img
								class="card-img-top img-fluid"
								src={require('../assets/others/tracktor.jpg')}
								alt=""
							/>
							<div class="card-body">
								<h3 class="card-title">Deskripsi </h3>
								<p class="card-text">
									The well-known and customer appreciated wear
									performance of the corresponding Berco
									products currently in the market does not
									change in these new products. Therefore, the
									current wear tables may be used also for
									wear life evaluation of the new chains.
								</p>
								{/* <span class="text-warning">
									&#9733; &#9733; &#9733; &#9733; &#9734;
								</span> */}
								{/* 4.0 stars */}
							</div>
						</div>
						{/* <!-- /.card --> */}

						<div class="card card-outline-secondary my-4">
							<div class="card-header">Product Terbaru</div>
							<div class="card-body">
								<p>
									The latest production from BERCO for D8R
									machine class - - - CR4525C – BPR (external
									snap ring) in master link only + Old Design
									Seal Group + Different Oil vs D version
									Caterpillar Part No: 8E-4518 CR4525D – BPR
									(external snap ring) in master link only +
									NEW SEAL GROUP (improvement) + NEW OIL
									(improvement). For not High Impact
									application – GOOD chain IMPROVED VERSION OF
									CR4525 – !! LATEST NON BPR2 (CAT PPR) DESIGN
									!! CR7603 – BPR2 (metal ring squeezed
									between pin and link= CAT PPR) -
									improvement+ NEW SEAL GROUP (improvement) +
									NEW OIL (improvement).. For all application
									(especially for High Impact Application) –
									GOOD chain Caterpillar Part No: 8E-4517
								</p>

								<hr />
								<p>
									- Overall design remain the same except the
									improved sealing components of longer joint
									life and better wear behavior of the seal
									(same as BPR2 = CAT PPR) - Lubrication
									improvement – (same as BPR2 = CAT PPR) - BPR
									design at Master Link ONLY
								</p>

								<hr />
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
