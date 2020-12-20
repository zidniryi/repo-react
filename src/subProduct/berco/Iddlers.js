import React, { Fragment } from 'react'
import Footer from '../../components/Footer'
import NavBar from '../../components/NavBar'
const Iddlers = () => {
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
								src={require('../../assets/sub/idlers_1.jpg')}
								alt=""
							/>
							<div class="card-body">
								<h3 class="card-title">Iddlers </h3>
								<p>
									We also place great emphasis on wear resistance for idlers. No
									matter whether cast, forged or welded, Berco idlers offer
									improved structural strength and optimum tracking. Our
									“lifetime” seals ensure permanent lubrication, thus reducing
									maintenance and operating costs.
								</p>
								<b>Supply range:</b>
								<p class="card-text">
									<ul>
										<li>Cast, forged and welded versions</li>
										<li>
											Versions for extremely cold temperatures (-50°C/-58°F)
											available
										</li>
										<li>
											Versions for extremely cold temperatures (-50°C/-58°F)
											available
										</li>
										<li>
											Versions for extremely cold temperatures (-50°C/-58°F)
											available
										</li>
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
									src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQVe3FX-USrxNxkjEQ0tCvKVBLGD8PukHe6dmf2rorX9lFTpFPZ7zGJ8dKbLPJzlw/pubhtml?widget=true&amp;headers=false"
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

export default Iddlers
