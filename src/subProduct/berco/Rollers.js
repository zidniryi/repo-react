import React, { Fragment } from 'react'
import Footer from '../../components/Footer'
import NavBar from '../../components/NavBar'
import rollers from './json/rollers.json'

const Rollers = () => {
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
								src={require('../../assets/sub/Rollers_1.jpg')}
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

						<div>
							<h3 class="text-light bg-info">Rollers</h3>
							<table class="table table-striped">
								<thead class="thead-dark">
									<tr>
										<th scope="col">No</th>
										<th scope="col">OEM PARTNO</th>
										<th scope="col">BERCO PARTNO</th>
										<th scope="col">Description</th>
										<th scope="col">MODEL UNIT</th>
									</tr>
								</thead>
								<tbody>
									{rollers.map((data, index) => (
										<tr>
											<th scope="row">{data.NO}</th>
											<td>{data['OEM PARTNO']}</td>
											<td>{data['BERCO PARTNO']}</td>
											<td>{data.DESCRIPTION}</td>
											<td>{data['MODEL UNIT']}</td>
										</tr>
									))}
								</tbody>
							</table>
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

export default Rollers
