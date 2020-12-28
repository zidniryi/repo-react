import React, { Fragment } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import CardDeck from '../home/CardDeck'
import TitleApp from '../title/TitleApp'

const Customer = () => {
	return (
		<Fragment>
			<NavBar />
			<TitleApp titleApp="Customer Pafindo" />

			<div
				className="container"
				style={{ marginTop: 7 + '%', marginBottom: 100 + 'px' }}
			>
				<h2 style={{ textAlign: 'center', fontWeight: 'bold' }}>
					What is PAFINDO doing :
				</h2>
				<hr />
				<p>
					<ol>
						<li>
							Produk yang berkualitas
							<ul>
								<li>
									Mendukung komitmen terhadap kualitas, kinerja dan harga yang
									kompetitif.
								</li>
								<li>
									Mendukung komitmen terhadap kualitas, kinerja dan harga yang
									kompetitif.
								</li>
							</ul>
						</li>

						<li>
							Inventory yang cukup besar
							<ul>
								<li>
									Lebih dari 2.000 item yang didukung dengan gudang seluas 3.800
									meter persegi juga 70 karyawan siap untuk memberikan bantuan
									pelayanan yang terbaik.
								</li>
								<li>
									Sebagian besar produk ready stock sehingga Anda dapat
									meminimalkan unit downtime dan juga dapat memelihara
									produktivitas mesin alat berat Anda (Time
								</li>
							</ul>
						</li>

						<li>
							Distribusi yang cukup luas
							<ul>
								<li>
									Mencakup ke seluruh wilayah di Indonesia. Dimana pun Anda
									berada, kami memiliki sumber daya dan jaringan untuk melayani
									Anda.
								</li>
							</ul>
						</li>
					</ol>
				</p>
				<hr />
				<div id="demo" className="carousel slide" data-ride="carousel">
					<ul className="carousel-indicators">
						<li data-target="#demo" data-slide-to="0" className="active"></li>
					</ul>

					<div className="carousel-inner">
						<div className="carousel-item active">
							<center>
								<img
									src={require('../assets/others/customer.jpg')}
									alt="Los Angeles"
									className="img-fluid"
								/>
							</center>
						</div>
					</div>

					<a className="carousel-control-prev" href="#demo" data-slide="prev">
						<span className="carousel-control-prev-icon"></span>
					</a>
					<a className="carousel-control-next" href="#demo" data-slide="next">
						<span className="carousel-control-next-icon"></span>
					</a>
				</div>
				<hr />
				<h2 style={{ textAlign: 'center', fontWeight: 'bold' }}>
					Our Customers
				</h2>
				<hr />

				<div class="card-deck">
					<CardDeck image={require('../assets/customer/1.png')} />
					<CardDeck image={require('../assets/customer/2.png')} />
					<CardDeck image={require('../assets/customer/4.jpg')} />
					<CardDeck image={require('../assets/customer/5.jpeg')} />
					<CardDeck image={require('../assets/customer/5.png')} />
					<CardDeck image={require('../assets/customer/6.jpg')} />
				</div>
				<hr />

				<div class="card-deck">
					<CardDeck image={require('../assets/customer/7.jpg')} />
					<CardDeck image={require('../assets/customer/8.jpeg')} />
					<CardDeck image={require('../assets/customer/8.png')} />
					<CardDeck image={require('../assets/customer/9.jpeg')} />
					<CardDeck image={require('../assets/customer/12.png')} />
				</div>
				<hr />
			</div>
			<Footer />
		</Fragment>
	)
}

export default Customer
