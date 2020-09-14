import React, { Fragment } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

const Contact = () => {
  return (
    <Fragment>
      <NavBar />
      <div class="row" id="contatti">
        <div class="container mt-5">
          <div class="row" style={{ height: 550 + 'px' }}>
            <div class="col-md-6 maps">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11880.492291371422!2d12.4922309!3d41.8902102!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x28f1c82e908503c4!2sColosseo!5e0!3m2!1sit!2sit!4v1524815927977"
                frameborder="0"
                style={{ border: 0, height: 500, width: 400 }}
                allowfullscreen
              ></iframe>
            </div>
            <div class="col-md-6">
              <h2 class="text-uppercase mt-3 font-weight-bold text-black">
                Hubungi Kami
              </h2>
              <form action="">
                <div class="row">
                  <div class="col-lg-6">
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control mt-2"
                        placeholder="Nama Depan"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control mt-2"
                        placeholder="Nama Belakang"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="form-group">
                      <input
                        type="email"
                        class="form-control mt-2"
                        placeholder="Email"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="form-group">
                      <input
                        type="number"
                        class="form-control mt-2"
                        placeholder="Telepon"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-group">
                      <textarea
                        class="form-control"
                        id="exampleFormControlTextarea1"
                        placeholder="Pesan"
                        rows="3"
                        required
                      ></textarea>
                    </div>
                  </div>
                  <div class="col-12">
                    <button class="btn btn-primary btn-lg" type="submit">
                      Kirim Pesan
                    </button>
                  </div>
                </div>
              </form>
              <div class="text-white">
                <h2 class="text-uppercase mt-4 font-weight-bold">
                  Alamat Kami
                </h2>
                <i class="fas fa-phone mt-3 pr-4"></i>{' '}
                <a href="tel:+">(+39) 123456</a>
                <br />
                <i class="fas fa-phone mt-3 pr-4"></i>{' '}
                <a href="tel:+">(+39) 123456</a>
                <br />
                <i class="fa fa-envelope mt-3 pr-4"></i>{' '}
                <a href="">info@test.it</a>
                <br />
                <i class="fas fa-globe mt-3 pr-4"></i>{' '}
                <a href="">Lokasi Kami</a>
                <br />
                <div class="my-4">
                  <a href="">
                    <i class="fab fa-facebook fa-3x"></i>
                  </a>{' '}
                  <a href="">
                    <i class="fab fa-instagram fa-3x"></i>
                  </a>{' '}
                  <a href="">
                    <i class="fab fa-linkedin fa-3x"></i>
                  </a>{' '}
                  <a href="">
                    <i class="fab fa-twitter fa-3x"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  )
}

export default Contact
