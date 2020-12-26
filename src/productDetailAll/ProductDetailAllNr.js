import React, { Fragment } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

const ProductDetailAllNr = () => {
	return (
		<Fragment>
			<NavBar />
			{/* <!-- Page Content --> */}
			<div class="container" style={{ marginTop: 100 }}>
				<div class="row">
					<div class="col-lg-3">
						<h1 class="my-4">UCR NR</h1>
						<div class="list-group">
							<Link to="/sub-nr-tracklink" class="list-group-item active">
								Tracklink
							</Link>
							<Link to="/sub-nr-trackshoes" class="list-group-item active">
								Trackshoes
							</Link>
							<Link to="/sub-nr-rollers" class="list-group-item active">
								Rollers
							</Link>
							<Link to="/sub-nr-iddlers" class="list-group-item active">
								Idlers
							</Link>
							<Link to="/sub-nr-sprockets" class="list-group-item active">
								Sprockets
							</Link>
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
								<h3 class="card-title">
									REALIBLE GLOBAL SOURCE FOR UNDERCARRIAGE{' '}
								</h3>
								<p class="card-text">
									Carrier Roller, Track Roller, Idler, Sprocket dan Track link
									endurable for the quipment's load are the core pars of the
									equipment required for high strenght and durabilty. We have
									concentrated on the quality improvement on our technology
									along with the latest equipments to satisty the needs of the
									customer all over.
								</p>
								{/* <span class="text-warning">
									&#9733; &#9733; &#9733; &#9733; &#9734;
								</span> */}
								{/* 4.0 stars */}
							</div>
						</div>
						{/* <!-- /.card --> */}

						{/* <!-- /.card --> */}
					</div>
					{/* <!-- /.col-lg-9 --> */}
				</div>
			</div>
			<Footer />
		</Fragment>
	)
}

export default ProductDetailAllNr
