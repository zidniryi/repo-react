import React, { Fragment } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import IconText from './component/IconText'

const Visi = () => {
	return (
		<Fragment>
			<NavBar />
			<div
				className="container"
				style={{ marginTop: 100 + 'px', marginBottom: 100 + 'px' }}
			>
				<h2 style={{ textAlign: 'center', fontWeight: 'bold' }}>
					Our Mission & Vision :
				</h2>
				<hr />
				<div className="row">
					<div className="col bg">
						<p>
							Memberikan layanan terbaik dalam hal pengadaan suku
							cadang untuk alat berat dengan harga yang kompetitif
							dan juga warranty untuk mencapai CPH dengan kualitas
							produk terbaik dan juga memegang tanggung jawab
							pekerjaan karena kepuasan klien kami adalah
							prioritas utama kami.
						</p>
					</div>
					<div className="col bg">
						<img
							src={require('../assets/others/tracktor.jpg')}
							alt=""
							width="80%"
						/>
					</div>
				</div>

				<div>
					<h2 style={{ fontWeight: 'bold', marginTop: 20 }}>
						7 Keys Success of Pafindo are:
					</h2>
					<hr />

					{/* Here */}

					{/* Here */}
					<div className="row" style={{ marginTop: 20 }}>
						<IconText
							logo={require('../assets/visi/1-profesional.png')}
							textLogo={'Profesionalism'}
						/>

						<IconText
							logo={require('../assets/visi/1-profesional.png')}
							textLogo={'Profesionalism'}
						/>
						<IconText
							logo={require('../assets/visi/2-integrity.png')}
							textLogo={'Integrity'}
						/>
						<IconText
							logo={require('../assets/visi/3-customer-satisfy.png')}
							textLogo={'Customer Satisfication'}
						/>
						<IconText
							logo={require('../assets/visi/4-teamwork.png')}
							textLogo={'Teamwork'}
						/>
						<IconText
							logo={require('../assets/visi/5-uniform.png')}
							textLogo={'Uniform'}
						/>
						<IconText
							logo={require('../assets/visi/6-Respect.png')}
							textLogo={'Respect'}
						/>
					</div>
				</div>
			</div>
			<Footer />
		</Fragment>
	)
}

export default Visi
