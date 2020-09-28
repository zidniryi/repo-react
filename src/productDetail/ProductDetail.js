import React, { Fragment } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import slider1 from '../assets/sliderProduct/Slider1.jpg'
import slider2 from '../assets/sliderProduct/Slider2.jpg'
import slider3 from '../assets/sliderProduct/Slider3.jpg'

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
              Berco is know for superior engineering & technology. Innovation,
              comprehensive know how and state of the art manufacturing. Nearing
              100 years of leadership & research makes Berco undercarriage the
              reference focal point in the field of construction equipment.
              Berco products are made to perform under low & high temperature
              versions of extreme applications and are unrivaled in terms of
              wear resistance, durability & technical content.
            </p>
            <a
              href="https://www.costex.com/wp-content/uploads/2016/08/F-720-191.pdf"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-info btn-lg btn-block"
            >
              <i class="fa fa-book"></i> Download
            </a>
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
        <h3 className="my-4">Parts : </h3>
        <div className="row">
          <div className="col-md-3 col-sm-6 mb-4">
            <a href="#">
              <img
                className="img-fluid"
                src="../assets/sliderProduct/Slider1.jpg"
                alt=""
              />
            </a>
          </div>

          <div className="col-md-3 col-sm-6 mb-4">
            <a href="#">
              <img
                className="img-fluid"
                src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/21eb174b-07b9-48ab-a085-9b220fbe774a/Logo_NR.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20200926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20200926T150430Z&X-Amz-Expires=86400&X-Amz-Signature=3c2651d74af86491c1146f7b662264e6f2ed3c3c5f003cb126201f46c265bf0f&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Logo_NR.jpg%22"
                alt=""
              />
            </a>
          </div>

          <div className="col-md-3 col-sm-6 mb-4">
            <a href="#">
              <img
                className="img-fluid"
                src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/5f67321b-04ca-4839-96e5-86a4a14a9145/OFM_LOGO.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20200926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20200926T150453Z&X-Amz-Expires=86400&X-Amz-Signature=3e054748294b3f5c6671ae0977e48c132db26bf256bbe182b9b48791cd3f211b&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22OFM_LOGO.png%22"
                alt=""
              />
            </a>
          </div>

          <div className="col-md-3 col-sm-6 mb-4">
            <a href="#">
              <img
                className="img-fluid"
                src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/8cd86172-4c98-4a67-b43d-58474e73ce93/GET.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20200926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20200926T150534Z&X-Amz-Expires=86400&X-Amz-Signature=f83a26fa66c1d68e42187d782b529b891a68b1caa4fc0211c8454628880e1851&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22GET.jpg%22"
                alt=""
              />
            </a>
          </div>

          <div className="col-md-3 col-sm-6 mb-4">
            <a href="#">
              <img
                className="img-fluid"
                src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/06bb6523-39e8-48e8-81a9-462b2c89fc2f/others.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20200926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20200926T150628Z&X-Amz-Expires=86400&X-Amz-Signature=e024bacfd4a03f19ae8b8357b508d05cf3e7d3b94f4c94ab7f26d3ccc3de5269&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22others.jpg%22"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  )
}

export default ProductDetail
