import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'

export const SideFloating = () => {
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 })
  const isTabletOrMobileDevice = useMediaQuery({ maxDeviceWidth: 1224 })

  return (
    <Fragment>
      {isTabletOrMobile || isTabletOrMobileDevice ? (
        <aside className="social-sharing" style={{ zIndex: 10 }}>
          <Link to="/form-contact" className="twitter">
            <i className="far fa-envelope" style={{ width: 20 }}></i>
          </Link>
          <a href="#" className="google">
            <i className="fas fa-phone-volume" style={{ width: 20 }}></i>
          </a>
          <a
            href=" https://api.whatsapp.com/send?phone=6281933357030&text=Saya%20tertarik%20untuk%20berlangganan%20KIRIM.EMAIL"
            className="whatsapp"
          >
            <i
              className="fab fa-whatsapp"
              aria-hidden="true"
              style={{ width: 20 }}
            ></i>
          </a>
          <Link to="/contact" className="linkedin">
            <i className="fas fa-map-marker-alt" style={{ width: 20 }}></i>
          </Link>
        </aside>
      ) : (
        <div className="float-sm">
          <div className="fl-fl float-fb">
            <i className="fa fa-envelope"></i>
            <Link to="/form-contact" target="_blank">
              {' '}
              Contact Us
            </Link>
          </div>
          <div className="fl-fl float-tw">
            <i className="fa fa-phone"></i>
            <a href="" target="_blank">
              08484416412
            </a>
          </div>
          <div className="fl-fl float-gp">
            <i className="fab fa-whatsapp"></i>
            <a
              href=" https://api.whatsapp.com/send?phone=6281933357030&text=Saya%20tertarik%20untuk%20berlangganan%20KIRIM.EMAIL"
              target="_blank"
            >
              WhatsApp Us
            </a>
          </div>
          <div className="fl-fl float-rs">
            <i className="fas fa-map-marker-alt"></i>
            <Link to="/contact">Find Us</Link>
          </div>
        </div>
      )}
    </Fragment>
  )
}
