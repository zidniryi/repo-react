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
        <h2 style={{ textAlign: 'center', fontWeight: 'bold' }}>
          Our Mission & Vision :
        </h2>
        <hr />
        <div className="row">
          <div className="col bg">
            <b> Our Mission & Vision :</b>
            <p>
              Memberikan layanan terbaik dalam hal pengadaan suku cadang untuk
              alat berat dengan harga yang kompetitif dan juga warranty untuk
              mencapai CPH dengan kualitas produk terbaik dan juga memegang
              tanggung jawab pekerjaan karena kepuasan klien kami adalah
              prioritas utama kami.
            </p>
          </div>
          <div className="col bg">
            <img
              src={require('../assets/others/tracktor.jpg')}
              alt=""
              width="80%"
            />
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  )
}

export default Visi
