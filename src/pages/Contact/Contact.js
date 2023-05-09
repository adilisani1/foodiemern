import React, { useState } from 'react';
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    message: ""
  });

  const handleChange = (event) => {
    const name = event.target.name
    const value = event.target.value

    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <>
      <section className='contact-wrapper'>
        <div className='container'>
          <div className='row rowClass text-center'>
            <div className='col-md-12 contact-section-title'>
              <h1 className='contact-title'>Contact</h1>
            </div>
          </div>
        </div>
      </section >
      <div className='container'>
        <form className='form-wrap' onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input
              type="text"
              name="username"
              className="form-control"
              id="username"
              aria-describedby="emailHelp"
              value={formData.username}
              onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input
              type="email"
              name="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              value={formData.email}
              onChange={handleChange} />
            {/* <div id="email" className="form-text">We'll never share your email with anyone else.</div> */}
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            {/* <input
            type="text-area"
            name="message"
            className="form-control"
            id="text"
            value={formData.message}
            onChange={handleChange}
          /> */}

            <textarea className="form-control" id="text" name="message" rows="4" cols="50" rows="3" onChange={handleChange}></textarea>


          </div>

          <button type="submit" className="">Submit</button>
        </form>

      </div>
    </>
  )
}
export default Contact;