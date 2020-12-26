import React, { Fragment } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import PDF1 from './pdf/1feurst.pdf'
import PDF2 from './pdf/2feurst.pdf'
import PDF3 from './pdf/3feurst.pdf'

const ProductDetailAllFeurst = () => {
	return (
		<Fragment>
			<NavBar />
			{/* <!-- Page Content --> */}
			<div class="container" style={{ marginTop: 100 }}>
				<div class="row">
					<div class="col-lg-3">
						<h1 class="my-4">FEURST</h1>
						<div class="list-group">
							<a
								href={PDF1}
								target="_blank"
								class="list-group-item active"
								rel="noopener noreferrer"
							>
								Lihat Catalog 1
							</a>
							<a
								href={PDF2}
								target="_blank"
								class="list-group-item active"
								rel="noopener noreferrer"
							>
								Lihat Catalog 2
							</a>
							<a
								href={PDF3}
								target="_blank"
								class="list-group-item active"
								rel="noopener noreferrer"
							>
								Lihat Catalog 3
							</a>
						</div>
					</div>
					{/* <!-- /.col-lg-3 --> */}

					<div class="col-lg-9">
						<div class="card mt-4">
							<img
								class="card-img-top img-fluid"
								src={require('../assets/others/Feurst-page.jpg')}
								alt=""
							/>
							<div class="card-body">
								<h3 class="card-title">
									TURNKEY – A NEW PATENTED HAMMERLESS SYSTEM{' '}
								</h3>
								<p class="card-text">
									Feurst has developed Turnkey teeth and adapters to allow fast
									and easy assembly and disassembly. User safety is enhanced as
									there are no shards from hammering.
								</p>
								{/* <span class="text-warning">
									&#9733; &#9733; &#9733; &#9733; &#9734;
								</span> */}
								{/* 4.0 stars */}
							</div>
						</div>
						{/* <!-- /.card --> */}

						<div class="card card-outline-secondary my-4">
							<div class="card-header">
								WHY CHOOSE TURNKEY TEETH AND ADAPTERS
							</div>
							<div class="card-body">
								<p>
									To develop the Turnkey system, Feurst drew on a wide range of
									existing products and in particular on tried and tested
									features:
								</p>

								<ul>
									<li>Recognised metallurgy</li>
									<li>The notion of compression in the keying system</li>
									<li>The geometry of the double pin</li>
									<li>The reversible wear cap</li>
								</ul>
								<p>
									These substantial and decisive features are enhanced by the
									following:
								</p>

								<ul>
									<li>
										The shape of the self-sharpening and penetrating teeth
										reduces the rate of wear
									</li>
									<li>
										There are numerous teeth profiles available, depending on
										the applications
									</li>
									<li>
										Increased tooth stability leads to less play, less wear and
										therefore greater efficiency
									</li>
								</ul>

								<p>
									The teams at Feurst are constantly striving to improve the
									design of these wear parts by focussing on various areas of
									research, i.e. facilitating the loading of excavator and
									loader buckets, making the work of operators easier, making
									adapters more durable, etc.{' '}
								</p>

								<hr />
							</div>
						</div>

						<div class="card card-outline-secondary my-4">
							<div class="card-header">
								THE ADVANTAGES OF THE TURNKEY SOLUTION
							</div>
							<div class="card-body">
								<ul>
									<li>
										A reliable system that makes assembly and disassembly
										extremely easy
									</li>
									<li>
										A new nose profile that offers greater wear resistance
									</li>
									<li>
										With its new Turnkey system, Feurst extends the service life
										of its users’ buckets by 50%.
									</li>

									<li>
										Constant compression means materials do not get inside the
										system
									</li>

									<li>
										The immobility of Turnkey teeth results in less vibration,
										less transmission and therefore less shock
									</li>

									<li>
										A loud “clack” sound indicates that the teeth have been
										correctly assembled
									</li>
									<li>All teeth sizes are available</li>
									<li>Available stocks</li>
									<li>Made in France</li>
								</ul>

								<hr />
							</div>
						</div>

						<div class="card card-outline-secondary my-4">
							<div class="card-header">PTS (PAFINDO TRACK SERVICE ) :</div>
							<div class="card-body">
								<iframe
									width="760"
									height="315"
									src="https://www.youtube.com/embed/RW9yIMTea-Q"
									frameborder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									allowfullscreen
									className="embed-responsive-item"
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

export default ProductDetailAllFeurst
