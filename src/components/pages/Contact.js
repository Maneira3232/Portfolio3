import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zprvxlm', 'template_m5msd1m', form.current, 'ACix6RWUXDUb4PZb0')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div className="contactBackground">
      <div className="container" />
      <form ref={form} onSubmit={sendEmail}>
        <div className="row pt-5 mx-auto" />
        <div className="col-8 form-group mx-auto">
          <input type="text" className="form-control" placeholder="Name" name="name" />
        </div>
        <div className="col-8 form-group mx-auto">
          <input type="email" className="form-control" placeholder="Email Address" name="email" />
        </div>
        <div className="col-8 form-group mx-auto">
          <input type="text" className="form-control" placeholder="Subject" name="subject" />
        </div>
        <div className="col-8 form-group mx-auto">
          <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message" />
        </div>
        <div className="col-8 pt-3 mx-auto">
          <input type="submit" className="btn btn-info" value="Send Message"></input>
        </div>
      </form>
    </div>
  );
};