import React, { Fragment } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

const Visi = () => {
  return (
    <Fragment>
      <NavBar />
      <div
        className="container"
        style={{ marginTop: 100 + 'px', marginBottom: 100 + 'px' }}
      >
        <h2>Lorem Ipsum</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu
          risus eget nulla bibendum pellentesque sed non felis. Nullam nec nisi
          non mi sollicitudin aliquam eget viverra odio. Donec sed elit eu augue
          dictum hendrerit sit amet vitae orci. Morbi nec vestibulum felis, ac
          dictum ex. Donec efficitur eros ut scelerisque ornare. Integer nibh
          lacus, eleifend nec justo eu, varius dictum ligula. Duis quam mi,
          luctus et porttitor at, faucibus at mi. Suspendisse quis augue tempus,
          consequat felis in, viverra dui. Orci varius natoque penatibus et
          magnis dis parturient montes, nascetur ridiculus mus. Aliquam aliquam
          dolor nibh, vitae dignissim lacus cursus eget. Nullam euismod vel odio
          id semper.
        </p>
        <hr />
        <div id="demo" className="carousel slide" data-ride="carousel">
          <ul className="carousel-indicators">
            <li data-target="#demo" data-slide-to="0" className="active"></li>
            <li data-target="#demo" data-slide-to="1"></li>
            <li data-target="#demo" data-slide-to="2"></li>
          </ul>

          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://www.w3schools.com/bootstrap4/chicago.jpg"
                alt="Los Angeles"
                width="1100"
                height="500"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://www.w3schools.com/bootstrap4/chicago.jpg"
                alt="Chicago"
                width="1100"
                height="500"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://www.w3schools.com/bootstrap4/chicago.jpg"
                alt="New York"
                width="1100"
                height="500"
              />
            </div>
          </div>

          <a className="carousel-control-prev" href="#demo" data-slide="prev">
            <span className="carousel-control-prev-icon"></span>
          </a>
          <a className="carousel-control-next" href="#demo" data-slide="next">
            <span className="carousel-control-next-icon"></span>
          </a>
        </div>
        <hr />

        <h2>Lorem Ipsum</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu
          risus eget nulla bibendum pellentesque sed non felis. Nullam nec nisi
          non mi sollicitudin aliquam eget viverra odio. Donec sed elit eu augue
          dictum hendrerit sit amet vitae orci. Morbi nec vestibulum felis, ac
          dictum ex. Donec efficitur eros ut scelerisque ornare. Integer nibh
          lacus, eleifend nec justo eu, varius dictum ligula. Duis quam mi,
          luctus et porttitor at, faucibus at mi. Suspendisse quis augue tempus,
          consequat felis in, viverra dui. Orci varius natoque penatibus et
          magnis dis parturient montes, nascetur ridiculus mus. Aliquam aliquam
          dolor nibh, vitae dignissim lacus cursus eget. Nullam euismod vel odio
          id semper.
        </p>

        <hr />
        <div className="d-flex flex-row">
          <div className="d-flex flex-column">
            <img
              src="https://www.w3schools.com/bootstrap4/cinqueterre.jpg"
              className="img-fluid"
            />
            <img
              src="https://www.w3schools.com/bootstrap4/cinqueterre.jpg"
              className="img-fluid"
            />
          </div>

          <div className="d-flex flex-column">
            <img
              src="https://www.w3schools.com/bootstrap4/cinqueterre.jpg"
              className="img-fluid"
            />
            <img
              src="https://www.w3schools.com/bootstrap4/cinqueterre.jpg"
              className="img-fluid"
            />
          </div>

          <div className="d-flex flex-column">
            <img
              src="https://www.w3schools.com/bootstrap4/cinqueterre.jpg"
              className="img-fluid"
            />
            <img
              src="https://www.w3schools.com/bootstrap4/cinqueterre.jpg"
              className="img-fluid"
            />
          </div>
          <div className="d-flex flex-column">
            <img
              src="https://www.w3schools.com/bootstrap4/cinqueterre.jpg"
              className="img-fluid"
            />
            <img
              src="https://www.w3schools.com/bootstrap4/cinqueterre.jpg"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  )
}

export default Visi
