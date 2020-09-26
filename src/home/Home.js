import React, { Fragment, useEffect } from 'react'
import NavBar from '../components/NavBar'
import Slider from '../components/Slider'
import Footer from '../components/Footer'
import Floating from '../components/Floating'
import { SideFloating } from '../components/SideFloating'
import { CardProduct } from './component/CardProduct'

const Home = () => {
  return (
    <Fragment>
      <NavBar />
      <Slider />

      <section className="service-sec" id="benefits">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="heading">
                <h2>
                  <small>PACIFIC FIRSTRACK INDONESIA</small>SPECIALIST IN
                  UNDERCARRIAGE PARTS & GROUND ENGAGING TOOLS (GET)
                </h2>
              </div>
            </div>
          </div>
          <hr />
          <h4>CTP® FEATURED REPLACEMENT CATERPILLAR® PARTS</h4>
          <div class="row" id="ads">
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
          </div>
        </div>
      </section>
      <Footer />
      <SideFloating />
    </Fragment>
  )
}

export default Home
