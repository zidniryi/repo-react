import React, { Fragment } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

const Certificate = () => {
	return (
		<Fragment>
			<NavBar />
			<div
				className="container"
				style={{ marginTop: 100 + 'px', marginBottom: 100 + 'px' }}
			>
				<h2 style={{ textAlign: 'center', fontWeight: 'bold' }}>
					Certificate:
				</h2>
				<hr />
				<a
					href={require('../assets/certificate/Authorized Distributor Certificate OFM_page-0001.jpg')}
					target="_blank"
				>
					<img
						src={require('../assets/certificate/Authorized Distributor Certificate OFM_page-0001.jpg')}
						alt="Certificate Pafindo"
						className="img-fluid"
					/>
				</a>

				<hr />
				<a
					href={require('../assets/certificate/Certificate Hi-Air (NR) Korea_page-0001.jpg')}
					target="_blank"
				>
					<img
						src={require('../assets/certificate/Certificate Hi-Air (NR) Korea_page-0001.jpg')}
						alt="Certificate Pafindo"
						className="img-fluid"
					/>
				</a>

				<hr />
				<a
					href={require('../assets/certificate/FEURST PAFINDO DEALER CERTIFICATE_page-0001.jpg')}
					target="_blank"
				>
					<img
						src={require('../assets/certificate/FEURST PAFINDO DEALER CERTIFICATE_page-0001.jpg')}
						alt="Certificate Pafindo"
						className="img-fluid"
					/>
				</a>
				<hr />
				<a
					href={require('../assets/certificate/Business_Partnership_BERCO_page-0001.jpg')}
					target="_blank"
				>
					<img
						src={require('../assets/certificate/Business_Partnership_BERCO_page-0001.jpg')}
						alt="Certificate Pafindo"
						className="img-fluid"
					/>
				</a>
			</div>
			<Footer />
		</Fragment>
	)
}

export default Certificate
