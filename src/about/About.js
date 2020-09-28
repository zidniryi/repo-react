import React, { Fragment } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

const About = () => {
  return (
    <Fragment>
      <NavBar />
      <div
        className="container"
        style={{ marginTop: 100 + 'px', marginBottom: 100 + 'px' }}
      >
        <h2 style={{ textAlign: 'center', fontWeight: 'bold' }}>About Us :</h2>
        <hr />
        <p>
          PT. Pacific Firstrack Indonesia (PT. PAFINDO) adalah distributor
          terkemuka untuk menawarkan barang seperti Undercarriage, Ground
          Engaging Tools (GET) dan Filter dengan mengembangkan kepada perusahaan
          industri di Indonesia khususnya Pertambangan, Kehutanan, Pertanian,
          Logging, Konstruksi, Oil & Gas.
        </p>
        <p>
          Sejak tahun 2007, PT PAFINDO telah secara aktif mempromosikan berbagai
          produk berkualitas tinggi dari BERCO, NR, OFM, FEURST, BPT, dan
          Donaldson. Lebih dari 2.000 item yang sudah kami siapkan di Warehouse
          dan didukung oleh karyawan yang memenuhi standar kebutuhan kami. PT
          PAFINDO berkomitmen untuk menawarkan solusi inovatif, handal dan
          ekonomis untuk memenuhi kebutuhan pelanggan.
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
                src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ac0c6665-4457-4533-91af-74eff3b94ba5/Slider3.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20200928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20200928T141502Z&X-Amz-Expires=86400&X-Amz-Signature=c2ee95077f46ec75ee7ce5ef50f3460309900e304de97b1bc14110899570d164&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Slider3.jpg%22"
                alt="Los Angeles"
                className="img-fluid"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ac0c6665-4457-4533-91af-74eff3b94ba5/Slider3.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20200928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20200928T141502Z&X-Amz-Expires=86400&X-Amz-Signature=c2ee95077f46ec75ee7ce5ef50f3460309900e304de97b1bc14110899570d164&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Slider3.jpg%22"
                alt="Los Angeles"
                className="img-fluid"
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
      </div>
      <Footer />
    </Fragment>
  )
}

export default About
