import React, { Fragment } from 'react'
import Footer from '../../components/Footer'
import NavBar from '../../components/NavBar'
import iddler from './json/iddler.json'
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

						<div>
							<h3 class="text-light bg-info">Iddlers</h3>
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
									{iddler.map((data, index) => (
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

export default Iddlers
