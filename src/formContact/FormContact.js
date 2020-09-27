import React, { Fragment } from 'react'
import NavBar from '../components/NavBar'

const FormContact = () => {
  return (
    <Fragment>
      <NavBar />
      <div className="body-form" style={{ marginTop: 100 + 'px' }}>
        <div className="container contact-form">
          <div className="contact-image">
            <img
              src="https://image.ibb.co/kUagtU/rocket_contact.png"
              alt="rocket_contact"
            />
          </div>
          <form method="post">
            <h3 style={{ color: 'white', fontWeight: 'bold' }}>
              Drop Us a Message
              <p>Lorem Ipsum Dolor Amet</p>
            </h3>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    type="text"
                    name="txtName"
                    className="form-control"
                    placeholder="Your Name *"
                    value=""
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="txtEmail"
                    className="form-control"
                    placeholder="Your Email *"
                    value=""
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="txtPhone"
                    className="form-control"
                    placeholder="Your Phone Number *"
                    value=""
                  />
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    name="btnSubmit"
                    className="btnSubmit"
                    value="Send Message"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <textarea
                    name="txtMsg"
                    className="form-control"
                    placeholder="Your Message *"
                    style={{ width: 100 + '%', height: 150 + 'px' }}
                  ></textarea>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  )
}

export default FormContact
