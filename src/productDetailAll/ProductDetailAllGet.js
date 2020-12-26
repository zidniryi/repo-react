import React, { Fragment } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import PDF2 from './pdf/2feurst.pdf'
import { Link } from 'react-router-dom'

const ProductDetailAllGet = () => {
	return (
		<Fragment>
			<NavBar />
			{/* <!-- Page Content --> */}
			<div class="container" style={{ marginTop: 100 }}>
				<div class="row">
					<div class="col-lg-3">
						<h1 class="my-4">Ground Engaging Tools</h1>
						<div class="list-group">
							<Link
								to="/sub-cutting-edge-and-end-bit"
								class="list-group-item active"
							>
								Cutting Edge and End Bit
							</Link>
							<a href={PDF2} target="_blank" class="list-group-item active">
								Tooth Bucket, Adapter, etc
							</a>
						</div>
					</div>
					{/* <!-- /.col-lg-3 --> */}

					<div class="col-lg-9">
						<div class="card mt-4">
							<img
								class="card-img-top img-fluid"
								src={require('../assets/others/feurst-detail.jpg')}
								alt=""
							/>
							<div class="card-body">
								<h3 class="card-title">Main products </h3>
								<p class="card-text">
									Main products are construction machinery wear-resistant
									parts,including complete series of cutting edges, end bits,
									ripper shanks & adaptors, teeth and side cutters.
								</p>
							</div>
						</div>
					</div>
					{/* <!-- /.col-lg-9 --> */}
				</div>
			</div>
			<Footer />
		</Fragment>
	)
}

export default ProductDetailAllGet
