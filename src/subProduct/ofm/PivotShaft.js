import React, { Fragment } from 'react'
import Footer from '../../components/Footer'
import NavBar from '../../components/NavBar'
const PivotShaft = () => {
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
								src={require('../../assets/others/PIVOT_SHAFT.jpg')}
								alt=""
							/>
							<div class="card-body">
								<h3 class="card-title">Rollers </h3>
								<p>
									Rollers by Berco are designed and manufactured for long
									service life, resulting in low hourly operating costs.
									Through-hardened or surface-hardened roll shell bodies
									increase wear resistance and ensure high structural strength
									and resistance to deformation. The seals guarantee permanent
									lubrification for optimum durability.
								</p>
								<b>Supply range:</b>
								<p class="card-text">
									<ul>
										<li>
											More than1,500 different rollers for all types of
											equipment and applications
										</li>
										<li>For tracked vehicles weighing 1 to 330 tons</li>
										<li>
											Single-flange,double-flange and inner flange rollers
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
							<div class="card-header">ROLLERS EXCEL </div>
							<div class="card-body">
								<iframe
									title="Youtube Pafindo"
									width="100%"
									height="600px"
									src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTqSoBUDnUrDDxZjmTvz-TZ_eDvqHKKQfqTXC0lVzbyJjssh6YniCUoHymcTzFgkA/pubhtml?widget=true&amp;headers=false"
								></iframe>
							</div>
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

export default PivotShaft
