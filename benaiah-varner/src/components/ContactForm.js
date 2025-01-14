import React, { useState, useMemo } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [formValues, setFormValues] = useState({
    first_name: '',
    last_name: '',
    phone_number: '',
    email: '',
    message: '',
  });
  const [resStatus, setResStatus] = useState(false);

  const onChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  useMemo(() => {
    emailjs.init({
      publicKey: 'v-B9lu5prNFOWe-MB',
      // Do not allow headless browsers
      blockHeadless: true,
      limitRate: {
        // Set the limit rate for the application
        id: 'app',
        // Allow 1 request per 10s
        throttle: 10000,
      },
    });
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(formValues);
    emailjs
      .send(
        'service_5n8vckj',
        'template_j5l5kx8',
        formValues,
        'v-B9lu5prNFOWe-MB'
      )
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          setFormValues({
            first_name: '',
            last_name: '',
            phone_number: '',
            email: '',
            message: '',
          });
          setResStatus(true);
        } else {
          setResStatus(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h2>Contact</h2>
      <div className="form-container">
        <h3>Let's get in touch.</h3>
        <form onSubmit={sendEmail}>
          <div className="contact-info">
            <label htmlFor="">
              First Name
              <input
                type="text"
                name="first_name"
                placeholder="First Name"
                value={formValues.first_name}
                onChange={onChange}
              />
            </label>
            <label htmlFor="">
              Last Name
              <input
                type="text"
                name="last_name"
                placeholder="Last Name"
                value={formValues.last_name}
                onChange={onChange}
              />
            </label>
          </div>
          <div className="contact-info">
            <label htmlFor="">
              Email
              <input
                type="text"
                name="email"
                placeholder="Email Address"
                value={formValues.email}
                onChange={onChange}
              />
            </label>
            <label htmlFor="">
              Phone Number
              <input
                type="text"
                name="phone_number"
                placeholder="Phone Number"
                value={formValues.phone_number}
                onChange={onChange}
              />
            </label>
          </div>
          <div className="message">
            <label htmlFor="">
              <p>Message</p>
              <textarea
                name="message"
                id=""
                cols="30"
                rows="10"
                placeholder="Message"
                value={formValues.message}
                onChange={onChange}
              ></textarea>
            </label>
          </div>
          <button className="get-in-touch">
            <p>Send Message</p>
          </button>

          {resStatus && <p className="success-message">Message Sent!</p>}
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
