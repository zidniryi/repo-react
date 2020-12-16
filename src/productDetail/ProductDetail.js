import React, { Fragment } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import slider1 from '../assets/sliderProduct/Slider1.jpg'
import slider2 from '../assets/sliderProduct/Slider2.jpg'
import slider3 from '../assets/sliderProduct/Slider3.jpg'
import CardProductLogo from './component/CardProductLogo'

const ProductDetail = () => {
	return (
		<Fragment>
			<NavBar />
			<div className="container" style={{ marginTop: 100 }}>
				<h1 className="my-4" style={{ fontWeight: 'bold' }}>
					UCR Berco
				</h1>

				<div className="row">
					<div className="col-md-8">
						<div
							id="carouselExampleIndicators"
							className="carousel slide"
							data-ride="carousel"
						>
							<ol className="carousel-indicators">
								<li
									data-target="#carouselExampleIndicators"
									data-slide-to="0"
									className="active"
								></li>
								<li
									data-target="#carouselExampleIndicators"
									data-slide-to="1"
								></li>
								<li
									data-target="#carouselExampleIndicators"
									data-slide-to="2"
								></li>
							</ol>
							<div className="carousel-inner">
								<div className="carousel-item active">
									<img
										className="d-block w-100"
										src={slider1}
										alt="First slide"
									/>
								</div>
								<div className="carousel-item">
									<img
										className="d-block w-100"
										src={slider2}
										alt="Second slide"
									/>
								</div>
								<div className="carousel-item">
									<img
										className="d-block w-100"
										src={slider3}
										alt="Third slide"
									/>
								</div>
							</div>
							<a
								className="carousel-control-prev"
								href="#carouselExampleIndicators"
								role="button"
								data-slide="prev"
							>
								<span
									className="carousel-control-prev-icon"
									aria-hidden="true"
								></span>
								<span className="sr-only">Previous</span>
							</a>
							<a
								className="carousel-control-next"
								href="#carouselExampleIndicators"
								role="button"
								data-slide="next"
							>
								<span
									className="carousel-control-next-icon"
									aria-hidden="true"
								></span>
								<span className="sr-only">Next</span>
							</a>
						</div>
					</div>

					<div className="col-md-4">
						<h3 className="my-3">UCR Berco</h3>
						<p>
							Improvement with Berco Pin Retention System ( BPR2 )
							Class Dozer D375, D8R, D9R, D10R
						</p>
						<a
							href="https://www.costex.com/wp-content/uploads/2016/08/F-720-191.pdf"
							target="_blank"
							rel="noopener noreferrer"
							class="btn btn-info btn-lg btn-block"
						>
							<i class="fa fa-book"></i> Download
						</a>

						<h3 className="my-3"> Main features: </h3>
						<ul>
							<li>
								Completely new and improved seals, designed by
								Berco with materials suitable for an extended
								working temperature range and improved wear
								performance when coupled with the bushing ends
							</li>
							<li>
								New pin retention system to ensure all joints
								are sealed to predetermined end–play
								specification;{' '}
							</li>
							<li>Optimized pin – link interference; </li>
							<li>
								Improved bushing I. D. geometry and surface
								finish;{' '}
							</li>
							<li>
								Full interchangeability with OEM parts also at
								subcomponent level.{' '}
							</li>
						</ul>

						<h3 className="my-3"> Main benefits: </h3>
						<ul>
							<li>Longer joint life;</li>
							<li>Improved serviceability & easy maintenance;</li>
							<li>Optimized pin – link interference; </li>
							<li>
								Ultimately, significantly improved total
								cost/hour.
							</li>
						</ul>
						<h3 className="my-3">Parts :</h3>
						<ul>
							<li>Track Link</li>
							<li>Track Shoes</li>
							<li>Rollers</li>
							<li>Rollers</li>
							<li>Idler</li>
						</ul>
					</div>
				</div>
				<hr />
				<h3 className="my-4">Products : </h3>
				<div class="row">
					<CardProductLogo
						image={require('../assets/logoProduct/berco.jpg')}
						title="UCR BERCO"
						desc="Berco is know for superior engineering & technology. Innovation, comprehensive know how and state of the art manufacturing."
					/>
					<CardProductLogo
						image={require('../assets/logoProduct/nr.jpg')}
						title="UCR NR"
						desc=" Carrier Roller, Track Roller, Idler, Sprocket dan Track Link endurable for the equipment's load are the core parts of the equipment."
					/>
					<CardProductLogo
						image={require('../assets/logoProduct/ofm.jpg')}
						title="OFM"
						desc="The Ofm top line's vaster product range is proven for best results even in the toughest working conditions."
						newLine={true}
					/>
					<CardProductLogo
						image={require('../assets/logoProduct/feurst.jpg')}
						title="FEURST"
						desc="Since 1992, Feurst has manufactured bucket teeth and adapters for quarrying and earthmoving equipments, i.e. loaders and excavators from 35 to 200 tonnes."
					/>
					<CardProductLogo
						image={require('../assets/logoProduct/getme.jpg')}
						title="Ground Engaging Tools"
						desc="Protect your machines with the ground engaging tools (GET) that are designed specifically for them. Buckets or blades, tips or edges, rippers or side cutters"
					/>
					<CardProductLogo
						image={require('../assets/logoProduct/other.jpg')}
						title="Others"
						desc="Your undercarriage is an expensive investment. It accounts for as much as 20 percent of the price of a new track-type machine."
					/>
				</div>
			</div>
			<Footer />
		</Fragment>
	)
}

export default ProductDetail
