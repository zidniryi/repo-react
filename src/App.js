import React, { Fragment } from 'react'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
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
import { SideFloating } from './components/SideFloating'

const App = () => {
	return (
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
				<Route exact path={'/form-contact'} component={FormContact} />
				<Route
					exact
					path={'/detail-product'}
					component={ProductDetail}
				/>
			</Fragment>
		</Router>
	)
}

export default App
