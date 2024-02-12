import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import './Contact.css';


const Contact = () => {
  return (
    <div>
    <Navbar />
    <div className="contact-main">
      <div className="contact-address-location">
        <div className="contact">
          <span className="text-primary">Contact Page</span>
          <form className='contact-form' >
            <div className="form-group">
              <input type="text" name="name" className="contact-page-form" placeholder="Name" required />
            </div>
            <div className="form-group">
              <input type="text" name="name" className="contact-page-form" placeholder="Email" required />
            </div>
            <div className="form-group" id="select-form">
            <select className="contact-page-form" >
              <option value="-">Subject</option>
              <option value="sales">Sales & Marketing</option>
              <option value="creative">Creative Design</option>
              <option value="uiux">UI / UX</option>
            </select>
            </div>
            <div className="form-group" >
              <textarea rows={8} type="text" name="text" className="contact-page-form" placeholder="Message" required />
            </div>
            <div className="form-submit-btn">
              <button className="btn-primary" type="submit">Send</button>
            </div>
          </form>
        </div>
      </div>
      <div className="background-img">
      </div>
    </div>
  </div>
  )
}

export default Contact