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
              src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ac0c6665-4457-4533-91af-74eff3b94ba5/Slider3.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20200928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20200928T141502Z&X-Amz-Expires=86400&X-Amz-Signature=c2ee95077f46ec75ee7ce5ef50f3460309900e304de97b1bc14110899570d164&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Slider3.jpg%22"
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
