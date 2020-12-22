import React, { Fragment } from 'react'
import Footer from '../../components/Footer'
import NavBar from '../../components/NavBar'
const CuttingEdge = () => {
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
								<h3 class="card-title">Cutting Edge and End Bit</h3>
								<p>
									BPT is a product manufacturer for all type of heavy
									construction equipment, which includes, but is not limited to
									bulldozer cutting edge and end bits, grader blades and
									overlays, loader cutting edges, bucket cutting edges, and
									grouser bars, carbide and white iron product, Etc
								</p>
							</div>
						</div>
						{/* <!-- /.card --> */}

						{/* <div class="card card-outline-secondary my-4">
							<div class="card-header">IDDLERS EXCEL </div>
							<div class="card-body">
								<iframe
									width="100%"
									height="600px"
									src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRpAP-0Krsg62VkmmBPIyUY4IEh8_gzP4w-lMSFnffEWeE30FEMU9bD0dzmJ-THPg/pubhtml?widget=true&amp;headers=false"
								></iframe>
							</div>
						</div> */}
					</div>
				</div>
			</div>
			<Footer />
		</Fragment>
	)
}

export default CuttingEdge
