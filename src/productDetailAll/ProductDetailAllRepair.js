import React, { Fragment } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import PDF1 from './pdf/1feurst.pdf'
import PDF2 from './pdf/2feurst.pdf'
import PDF3 from './pdf/3feurst.pdf'

const ProductDetailAllRepair = () => {
	return (
		<Fragment>
			<NavBar />
			{/* <!-- Page Content --> */}
			<div class="container" style={{ marginTop: 100 }}>
				<div class="row">
					<div class="col-lg-3">
						<h1 class="my-4">Ground Engaging Tools</h1>
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
								src={require('../assets/others/repair-detail.jpg')}
								alt=""
							/>
							<div class="card-body">
								<h3 class="card-title">Deskripsi </h3>
								<p class="card-text">
									Standard Bucket : Suitable for digging and loading of soft to
									medium hard, compact and not very abrasive materials such as
									earth / rock, sand / gravel, coal, chalk.
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
									HD bucket : Suitable for digging and loading mixed earth and
									rock soils with a high proportion of rock or other abrasive
									materials.
								</p>

								<hr />
								<p>
									XHD bucket : Suitable for digging and loading mixed earth and
									rock soils with a high proportion of rock and other abrasive
									and hard materials
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

export default ProductDetailAllRepair
