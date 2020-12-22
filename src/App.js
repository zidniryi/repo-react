import React, { Fragment } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, HashRouter } from 'react-router-dom'
import Home from './home/Home'
import Contact from './contact/Contact'
import Gallery from './gallery/Gallery'
import About from './about/About'
import Product from './product/Product'
import Visi from './Visi/Visi'
import Catalog from './catalagog/Catalog'
import PdfViewer from './pdfViewer/PdfViewer'
import ServiceCTP from './service'
import Customer from './customer/Customer'
import FormContact from './formContact/FormContact'
import ProductDetail from './productDetail/ProductDetail'
import ProductDetailAll from './productDetailAll/ProductDetailAll'

import { SideFloating } from './components/SideFloating'
import ProductDetailAllNr from './productDetailAll/ProductDetailAllNr'
import ProductDetailAllOfm from './productDetailAll/ProductDetailAllOfm'
import ProductDetailAllFeurst from './productDetailAll/ProductDetailAllFeurst'
import ProductDetailAllGet from './productDetailAll/ProductDetailAllGet'
import ProductDetailAllRepair from './productDetailAll/ProductDetailAllRepair'
import ProductDetailAllService from './productDetailAll/ProductDetailAllService'
import Certificate from './certificate/Certificate'
import ServiceRepair from './service/ServiceRepair'
import TrackLink from './subProduct/berco/TrackLink'
import TrackShoes from './subProduct/berco/TrackShoes'
import Rollers from './subProduct/berco/Rollers'
import Iddlers from './subProduct/berco/Iddlers'
import Sprockets from './subProduct/berco/Sprockets'
import NRTracklink from './subProduct/nr/NRTrackLink'
import NRTrackShoes from './subProduct/nr/NRTrackShoes'
import NRRollers from './subProduct/nr/NRRollers'
import NRIddlers from './subProduct/berco/NRIddlers'
import NRSprockets from './subProduct/nr/NRSprockets'
import TrackFrame from './subProduct/ofm/TrackFrame'
import PinBush from './subProduct/ofm/PinBush'
import EqualizerBar from './subProduct/ofm/EqualizerBar'
import PivotShaft from './subProduct/ofm/PivotShaft'
import SwingBearing from './subProduct/ofm/SwingBearing'
import CuttingEdge from './subProduct/get/CuttingEdge'

const App = () => {
	return (
		<HashRouter basename="/">
			<Router>
				<Fragment>
					<SideFloating />
					<Route exact path={'/'} component={Home} />
					<Route exact path={'/contact'} component={Contact} />
					<Route exact path={'/galery'} component={Gallery} />
					<Route exact path={'/about'} component={About} />
					<Route exact path={'/product'} component={Product} />
					<Route exact path={'/visi'} component={Visi} />
					<Route exact path={'/galerry'} component={Gallery} />
					<Route exact path={'/catalog'} component={Catalog} />
					<Route exact path={'/pdf'} component={PdfViewer} />
					<Route exact path={'/service-ctp'} component={ServiceCTP} />
					<Route exact path={'/service-repair'} component={ServiceRepair} />

					{/* Sub */}
					<Route exact path={'/sub-tracklink'} component={TrackLink} />
					<Route exact path={'/sub-trackshoes'} component={TrackShoes} />
					<Route exact path={'/sub-rollers'} component={Rollers} />
					<Route exact path={'/sub-iddlers'} component={Iddlers} />
					<Route exact path={'/sub-sprockets'} component={Sprockets} />

					{/* Sub */}

					{/* Sub */}
					<Route exact path={'/sub-nr-tracklink'} component={NRTracklink} />
					<Route exact path={'/sub-nr-trackshoes'} component={NRTrackShoes} />
					<Route exact path={'/sub-nr-rollers'} component={NRRollers} />
					<Route exact path={'/sub-nr-iddlers'} component={NRIddlers} />
					<Route exact path={'/sub-nr-sprockets'} component={NRSprockets} />

					{/* Sub */}

					{/* Sub */}
					<Route exact path={'/sub-track-frame'} component={TrackFrame} />
					<Route exact path={'/sub-pin-bush'} component={PinBush} />
					<Route exact path={'/sub-equalizer-bar'} component={EqualizerBar} />
					<Route exact path={'/sub-pivot-shaft'} component={PivotShaft} />
					<Route exact path={'/sub-swing-bearing'} component={SwingBearing} />
					<Route
						exact
						path={'/sub-cutting-edge-and-end-bit'}
						component={CuttingEdge}
					/>

					{/* Sub */}

					<Route exact path={'/customer'} component={Customer} />
					<Route exact path={'/form-contact'} component={FormContact} />
					<Route exact path={'/detail-product'} component={ProductDetail} />
					<Route exact path={'/certificate'} component={Certificate} />
					<Route
						exact
						path={'/detail-product/berco'}
						component={ProductDetailAll}
					/>
					<Route
						exact
						path={'/detail-product/ucr-nr'}
						component={ProductDetailAllNr}
					/>
					<Route
						exact
						path={'/detail-product/ofm'}
						component={ProductDetailAllOfm}
					/>
					<Route
						exact
						path={'/detail-product/feurst'}
						component={ProductDetailAllFeurst}
					/>
					<Route
						exact
						path={'/detail-product/get'}
						component={ProductDetailAllGet}
					/>
					<Route
						exact
						path={'/detail-product/repair'}
						component={ProductDetailAllRepair}
					/>
					<Route
						exact
						path={'/detail-product/service'}
						component={ProductDetailAllService}
					/>
				</Fragment>
			</Router>
		</HashRouter>
	)
}

export default App
