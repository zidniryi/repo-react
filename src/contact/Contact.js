import React, { Fragment } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { SideFloating } from '../components/SideFloating'
import { IconContact } from './component/IconContact'

const Contact = () => {
	return (
		<Fragment>
			<NavBar />
			<SideFloating />

			<div className="row" id="contatti">
				<div className="container">
					<h2>Our Office Location</h2>
					<hr />
					<center>
						<img
							src={require('../assets/branch/1.jpg')}
							className="img-fluid"
							width="50%"
							style={{ alignSelf: 'center' }}
							alt="Pafindo"
						/>
					</center>
					<hr />
					<div className="row">
						<div className="col-sm-6">
							<b>
								HEADQUARTER :<br /> PT Pacific Firstrack Indonesia
							</b>
							<br />
							<br />

							<img
								src={require('../assets/contact/office_pavindo.png')}
								alt="..."
								className="img-thumbnail"
								alt="Pafindo"
							/>
							<IconContact
								name={`Jalan MT Haryono No.108, Balikpapan Kalimantan Timur`}
								iconName="fas fa-map-marker-alt"
							/>
							<IconContact
								name={`0542-7207555 (hunting)`}
								iconName="fa fa-phone"
							/>
							<IconContact
								name={`0542-7207722 (fax)`}
								iconName="fab fa-whatsapp"
							/>
						</div>

						<div className="col-sm-6">
							<b>
								JAKARTA NATIONAL OFFICE :<br />
								PT Pacific Firstrack Indonesia)
							</b>
							<br />
							<br />

							<img
								src={require('../assets/branch/branch_jakarta.jpg')}
								alt="..."
								className="img-thumbnail"
								alt="Pafindo"
							/>
							<IconContact
								name={'Jl. Kapuk Muara, Penjaringan - JAKARTA UTARA'}
								iconName="fas fa-map-marker-alt"
							/>
							<IconContact
								name={`0542-7207555 (hunting)`}
								iconName="fa fa-phone"
							/>
						</div>

						{/* 2 */}
						<br />
						<hr />
					</div>
					<hr />
				</div>

				<div className="container">
					<div className="row">
						<div className="col-sm-6">
							<b>
								WORKSHOP BALIKPAPAN :<br />
								PT Pacific Firstrack Indonesia
							</b>
							<br />
							<br />

							<img
								src={require('../assets/branch/branch_balikpapan.jpg')}
								alt="..."
								className="img-thumbnail"
								alt="Pafindo"
							/>
							<IconContact
								name={
									'Jl. Projakal KM 5.5 No.50 Kariangau, Balikpapan - Kalimantan Timur'
								}
								iconName="fas fa-map-marker-alt"
							/>
						</div>

						<div className="col-sm-6">
							<b>
								BRANCH SAMARINDA :<br />
							</b>
							<br />
							<img
								src={require('../assets/branch/branch_samarinda.jpeg')}
								alt="..."
								className="img-thumbnail"
								alt="Pafindo"
							/>
							<IconContact
								name={
									'Jl. Belatuk Raya 99, Sungai Pinang Samarinda - Kalimantan Timur'
								}
								iconName="fas fa-map-marker-alt"
							/>

							<IconContact name={`+62 541 7273535`} iconName="fa fa-phone" />
							<IconContact
								name={`+62 541 7273535 (Fax)`}
								iconName="fab fa-whatsapp"
							/>
						</div>
					</div>
					<hr />
				</div>

				<div className="container">
					<div className="row">
						<div className="col-sm-6">
							<b>
								BRANCH PALU :<br />
							</b>
							<br />
							<img
								src={require('../assets/branch/branch_palu.jpeg')}
								alt="..."
								className="img-thumbnail"
							/>
							<IconContact
								name={'Jl. Basuki Rahmat No. 35, Kota Palu - Sulawesi Tengah'}
								iconName="fas fa-map-marker-alt"
							/>
							<IconContact
								name={'+62 451 485 832 (Tlp)'}
								iconName="fa fa-phone"
							/>
							<IconContact
								name={`+62 451 485 832 (Fax)`}
								iconName="fab fa-whatsapp"
							/>
						</div>

						<div className="col-sm-6">
							<b>
								PACIFIC FIRSTRACK INDONESIA :<br />
							</b>
							<br />
							<img
								src={require('../assets/branch/branch_palu.jpeg')}
								alt="..."
								className="img-thumbnail"
							/>
							<IconContact
								name={
									'Jl Siak 2 Pergudangan AVIAN blok FF29 - Pekanbaru - Riau, Indonesia'
								}
								iconName="fas fa-map-marker-alt"
							/>
							<IconContact
								name={'0813 7878 7758 (Tlp)'}
								iconName="fa fa-phone"
							/>
							<IconContact name={`0853 6393 9828`} iconName="fab fa-whatsapp" />
						</div>
					</div>
					<hr />
				</div>

				<div className="container">
					<div className="row">
						<div className="col-sm-6">
							<b>
								PACIFIC FIRSTRACK INDONESIA :<br />
							</b>
							<br />
							<img
								src={require('../assets/branch/branch_palu.jpeg')}
								alt="..."
								className="img-thumbnail"
							/>
							<IconContact
								name={
									'Jl Noerdin Pandji RT 68 RW 10 No 153 - Sukaraja - Sukarame, Palembang - Indonesia'
								}
								iconName="fas fa-map-marker-alt"
							/>
							<IconContact name={'+62 711-5705999'} iconName="fa fa-phone" />
						</div>
					</div>
					<hr />
				</div>

				<div className="container mt-5">
					<div className="row" style={{ height: 550 + 'px' }}>
						<div className="col-md-6 maps">
							{/* <iframe
								title="map"
								src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11880.492291371422!2d12.4922309!3d41.8902102!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x28f1c82e908503c4!2sColosseo!5e0!3m2!1sit!2sit!4v1524815927977"
								frameborder="0"
								style={{ border: 0, height: 500, width: 400 }}
								allowfullscreen
							></iframe> */}

							{/* <iframe
								style={{ border: 0, height: 500, width: 400 }}
								allowfullscreen
								frameborder="0"
								style="border:0"
								src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ-Sg5Thj3aS4RF0qEMfIJjeQ&key=..."
								allowfullscreen
							></iframe> */}

							{/* <iframe
								width="600"
								height="450"
								allowfullscreen
								frameborder="0"
								style={{ border: 0, height: 500, width: 400 }}
								src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ-Sg5Thj3aS4RF0qEMfIJjeQ&key=AIzaSyAqn_uRTiAGkI9VpYMgqwEvG3sqb9t3Asw"
								allowfullscreen
							></iframe> */}
							<a href="https://g.co/kgs/JJC9UU" target="_blank">
								<img
									className="img-fluid"
									src={require('../assets/others/map.png')}
									alt="card image"
								/>
							</a>
						</div>
						<div className="col-md-6">
							<h2 className="text-uppercase mt-3 font-weight-bold text-black">
								Hubungi Kami
							</h2>
							<form action="">
								<div className="row">
									<div className="col-lg-6">
										<div className="form-group">
											<input
												type="text"
												className="form-control mt-2"
												placeholder="Nama"
												required
											/>
										</div>
									</div>
									<div className="col-lg-6">
										<div className="form-group">
											<input
												type="email"
												className="form-control mt-2"
												placeholder="Email"
												required
											/>
										</div>
									</div>

									<div className="col-12">
										<div className="form-group">
											<textarea
												className="form-control"
												id="exampleFormControlTextarea1"
												placeholder="Pesan"
												rows="3"
												required
											></textarea>
										</div>
									</div>
									<div className="col-12">
										<button className="btn btn-primary btn-lg" type="submit">
											Kirim Pesan
										</button>
									</div>
								</div>
							</form>
							<div className="text-white">
								<h2 className="text-uppercase mt-4 font-weight-bold">
									Alamat Kami
								</h2>
								<i className="fas fa-globe mt-3 pr-4"></i>{' '}
								{/* <a href="#app">Lokasi Kami</a> */}
								<br />
								<div className="my-4">
									<a href="#location">
										<i className="fab fa-facebook fa-3x"></i>
									</a>{' '}
									<a href="#location">
										<i className="fab fa-instagram fa-3x"></i>
									</a>{' '}
									<a href="#location">
										<i className="fab fa-linkedin fa-3x"></i>
									</a>{' '}
									<a href="#location">
										<i className="fab fa-twitter fa-3x"></i>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</Fragment>
	)
}

export default Contact
