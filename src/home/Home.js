import React, { Fragment } from 'react'
import NavBar from '../components/NavBar'
import Slider from '../components/Slider'
import { CardProduct } from './component/CardProduct'
import CardDeck from './CardDeck'
import TitleApp from '../title/TitleApp'
import FooterHome from '../components/FooterHome'

const Home = () => {
	return (
		<Fragment>
			<TitleApp titleApp="Home Pafindo" />
			<NavBar />
			<Slider />

			<section className="service-sec" id="benefits">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<div className="heading">
								<h2>
									<small>PACIFIC FIRSTRACK INDONESIA</small>
									SPECIALIST IN UNDERCARRIAGE PARTS & GROUND ENGAGING TOOLS
									(GET)
								</h2>
							</div>
						</div>
					</div>

					<div className="container">
						<h4 className="my-4">Our Products : </h4>
						<div class="card-deck">
							<CardDeck
								link="/detail-product/berco"
								image={require('../assets/logoProduct/berco.jpg')}
								title="UCR BERCO"
								desc="Berco is know for superior engineering & technology. Innovation, comprehensive know how and state of the art manufacturing. "
							/>
							<CardDeck
								link="/detail-product/ucr-nr"
								image={require('../assets/logoProduct/nr.jpg')}
								title="UCR NR"
								desc=" Feurst has developed Turnkey teeth and adapters to
								allow fast and easy assembly and disassembly.disassembly.User safety is enhanced as there are no shards from hammering."
							/>
							<CardDeck
								link="/detail-product/ofm"
								image={require('../assets/logoProduct/ofm.jpg')}
								title="OFM"
								desc="The Ofm top line's vaster product range is proven for best results even in the toughest working conditions."
								newLine={true}
							/>
						</div>
						<br />
						<div class="card-deck">
							<CardDeck
								link="/detail-product/feurst"
								image={require('../assets/logoProduct/feurst.jpg')}
								title="FEURST"
								desc="Feurst : TURNKEY – A NEW PATENTED HAMMERLESS SYSTEM  
								Feurst has developed Turnkey teeth and adapters to allow fast and easy assembly and disassembly.
								User safety is enhanced as there are no shards from hammering."
							/>
							<CardDeck
								link="/detail-product/get"
								image={require('../assets/logoProduct/getme.jpg')}
								title="Ground Engaging Tools"
								desc="Protect your machines with the ground engaging tools (GET) that are designed specifically for them. Buckets or blades, tips or edges, rippers or side cutters"
							/>
							<CardDeck
								link="service-ctp"
								image={require('../assets/logoProduct/other.jpg')}
								title="PTS"
								desc=" Your undercarriage is an expensive investment. Our goal is to help you keeping your undercarriage operating cost per hour as low as possible. That's why we developed the Pafindo Track Service (PTS)."
							/>
						</div>
					</div>

					<hr />

					{/* <h4 className="my-4" style={{ marginLeft: 18 }}>
						{' '}
						CTP® FEATURED REPLACEMENT CATERPILLAR® PARTS
					</h4>
					<div className="row" id="ads">
						<CardProduct />
						<CardProduct />
						<CardProduct />
						<CardProduct />
						<CardProduct />
						<CardProduct />
					</div> */}
				</div>
			</section>
			<FooterHome />
		</Fragment>
	)
}

export default Home
