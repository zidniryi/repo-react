import React, { Fragment } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import CatalogItem from './CatalogItem'

const Catalog = () => {
  return (
    <Fragment>
      <NavBar />
      <div
        className="container"
        style={{ marginTop: 100 + 'px', marginBottom: 100 + 'px' }}
      >
        <h1>E-Catalog</h1>
        <div className="row">
          <CatalogItem />
          <CatalogItem />
          <CatalogItem />
          <CatalogItem />
          <CatalogItem />
          <CatalogItem />
        </div>
      </div>
      <Footer />
    </Fragment>
  )
}

export default Catalog
