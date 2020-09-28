import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <Fragment>
      <nav
        className="navbar navbar-expand-lg mb-4 top-bar navbar-static-top sps
      sps--abv"
      >
        <div className="container">
          {/* <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse1"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button> */}
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span
              style={{ color: 'red' }}
              className="navbar-toggler-icon"
            ></span>
          </button>
          <a className="navbar-brand mx-auto" href="#">
            PAFINDO
          </a>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                {' '}
                <Link className="nav-link" to="/">
                  Home
                  <span className="sr-only">(current)</span>
                </Link>{' '}
              </li>

              <li className="nav-item dropdown">
                <a
                  id="dropdownMenu1"
                  href="#"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  className="nav-link
                dropdown-toggle"
                >
                  About Us
                </a>
                <ul
                  aria-labelledby="dropdownMenu1"
                  className="dropdown-menu border-0
                shadow"
                >
                  <li>
                    <Link to="/about" className="dropdown-item">
                      Company Profile{' '}
                    </Link>
                  </li>
                  <li>
                    <Link to="/visi" className="dropdown-item">
                      Visi Misi
                    </Link>
                  </li>
                  <li>
                    <Link to="/customer" className="dropdown-item">
                      Customer
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown has-megamenu">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  data-toggle="dropdown"
                >
                  {' '}
                  Mega menu{' '}
                </a>
                <div className="dropdown-menu megamenu">
                  <div className="row">
                    <div className="col-md-3">
                      <div className="col-megamenu">
                        <h6 className="title">Title Menu Satu</h6>
                        <ul className="list-unstyled">
                          <li>
                            <Link to="/product">Product One</Link>
                          </li>
                          <li>
                            <a href="#">Custom Menu</a>
                          </li>
                          <li>
                            <a href="#">Custom Menu</a>
                          </li>
                          <li>
                            <a href="#">Custom Menu</a>
                          </li>
                          <li>
                            <a href="#">Custom Menu</a>
                          </li>
                          <li>
                            <a href="#">Custom Menu</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="col-megamenu">
                        <h6 className="title">Title Menu Two</h6>
                        <ul className="list-unstyled">
                          <li>
                            <a href="#">Custom Menu</a>
                          </li>
                          <li>
                            <a href="#">Custom Menu</a>
                          </li>
                          <li>
                            <a href="#">Custom Menu</a>
                          </li>
                          <li>
                            <a href="#">Custom Menu</a>
                          </li>
                          <li>
                            <a href="#">Custom Menu</a>
                          </li>
                          <li>
                            <a href="#">Custom Menu</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="col-megamenu">
                        <h6 className="title">Title Menu Three</h6>
                        <ul className="list-unstyled">
                          <li>
                            <a href="#">Custom Menu</a>
                          </li>
                          <li>
                            <a href="#">Custom Menu</a>
                          </li>
                          <li>
                            <a href="#">Custom Menu</a>
                          </li>
                          <li>
                            <a href="#">Custom Menu</a>
                          </li>
                          <li>
                            <a href="#">Custom Menu</a>
                          </li>
                          <li>
                            <a href="#">Custom Menu</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="col-megamenu">
                        <h6 className="title">Title Menu Four</h6>
                        <ul className="list-unstyled">
                          <li>
                            <a href="#">Custom Menu</a>
                          </li>
                          <li>
                            <a href="#">Custom Menu</a>
                          </li>
                          <li>
                            <a href="#">Custom Menu</a>
                          </li>
                          <li>
                            <a href="#">Custom Menu</a>
                          </li>
                          <li>
                            <a href="#">Custom Menu</a>
                          </li>
                          <li>
                            <a href="#">Custom Menu</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <hr />
                      <div className="col-megamenu">
                        <h6 className="title">Title Menu Five</h6>
                        <ul className="list-unstyled">
                          <li>
                            <a href="#">Custom Menu</a>
                          </li>
                          <li>
                            <a href="#">Custom Menu</a>
                          </li>
                          <li>
                            <a href="#">Custom Menu</a>
                          </li>
                          <li>
                            <a href="#">Custom Menu</a>
                          </li>
                          <li>
                            <a href="#">Custom Menu</a>
                          </li>
                          <li>
                            <a href="#">Custom Menu</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li className="nav-item dropdown">
                <a
                  id="dropdownMenu1"
                  href="#"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  className="nav-link
                dropdown-toggle"
                >
                  Service
                </a>
                <ul
                  aria-labelledby="dropdownMenu1"
                  className="dropdown-menu border-0
                shadow"
                >
                  <li>
                    <Link to="service-ctp" className="dropdown-item">
                      CTS{' '}
                    </Link>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
                      REPAIR
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                {' '}
                <Link className="nav-link" to="/catalog">
                  E-Catalog
                </Link>
              </li>

              <li className="nav-item dropdown">
                <a
                  id="dropdownMenu1"
                  href="#"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  className="nav-link
                dropdown-toggle"
                >
                  Event
                </a>
                <ul
                  aria-labelledby="dropdownMenu1"
                  className="dropdown-menu border-0
                shadow"
                >
                  <li>
                    <Link to="/galery" className="dropdown-item">
                      Galeri 1{' '}
                    </Link>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
                      Galeri 2
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                {' '}
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Fragment>
  )
}

export default NavBar
