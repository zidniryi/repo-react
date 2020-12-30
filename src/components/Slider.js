import React, { Fragment } from 'react'
const background =
	'https://1.bp.blogspot.com/-3Oo7zkRV2Gw/X-wFFWHjAyI/AAAAAAAAOiI/YC5SLATJIsA26ZuKw6X2v3RzcZyxIKRwwCLcBGAsYHQ/s16000/Banner_Pafindo_35.jpg'
const background1 = 'http://www.pafindo.co.id/gfolder/images/bg/22.jpg'
const background2 = 'http://www.pafindo.co.id/gfolder/images/bg/17.jpg'
const background3 = 'http://www.pafindo.co.id/gfolder/images/bg/1810022.jpg'
const Slider = () => {
	return (
		<Fragment>
			<div className="swiper-container main-slider" id="myCarousel">
				<div className="swiper-wrapper">
					<div
						className="swiper-slide slider-bg-position"
						style={{ backgroundImage: `url(${background})` }}
						data-hash="slide1"
					>
						<h2>
							It Helo is health that is real wealth and not pieces of gold and
							silver
						</h2>
					</div>
					<div
						className="swiper-slide slider-bg-position"
						style={{ backgroundImage: `url(${background1})` }}
						data-hash="slide2"
					>
						<h2>
							Happiness Hi is nothing more than good health and a bad memory
						</h2>
					</div>
					<div
						className="swiper-slide slider-bg-position"
						style={{ backgroundImage: `url(${background2})` }}
						data-hash="slide2"
					>
						<h2>Hoo Hi is nothing more than good health and a bad memory</h2>
					</div>

					<div
						className="swiper-slide slider-bg-position"
						style={{ backgroundImage: `url(${background3})` }}
						data-hash="slide2"
					>
						<h2>Hoo Hi is nothing more than good health and a bad memory</h2>
					</div>
				</div>
				<div className="swiper-pagination"></div>
				<div className="swiper-button-prev">
					<i className="fa fa-chevron-left"></i>
				</div>
				<div className="swiper-button-next">
					<i className="fa fa-chevron-right"></i>
				</div>
			</div>
		</Fragment>
	)
}

export default Slider
