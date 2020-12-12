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
					<Route exact path={'/customer'} component={Customer} />
					<Route
						exact
						path={'/form-contact'}
						component={FormContact}
					/>
					<Route
						exact
						path={'/detail-product'}
						component={ProductDetail}
					/>
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
