import { useState } from "react";
import emailjs from '@emailjs/browser';
const creds = require('../utils/config');

const Contact = () => {
  const [status, setStatus] = useState('Submit');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mssg, setMssg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'Mi Eco Tiendita SITE',
      message: mssg
    };

    emailjs.send(creds.serviceID, creds.templateID, templateParams, creds.publicKEY)
      .then(response => {
        setName('');
        setEmail('');
        setMssg('');
        setStatus("Submit");
        alert('El correo ha sido enviado');
        console.log('Email sent succesfully!', response);
      })
      .catch(error => {
        alert(error);
        console.log('Error sending email message: ', error);
      });
  };

  return (
    <div className="contact px-5">
      <h2 className="prods-title text-center mb-5 pt-4">
        <b>Contacto</b>
        <hr className="h-line bar" />
      </h2>

      <div className="form-div">
        <form onSubmit={handleSubmit}>
          <div className="name form-group">
            <input
              type="name"
              className="form-control"
              id="name"
              aria-describedby="nameHelp"
              placeholder="Tu nombre"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>
          <div className="email form-group">
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Tu correo"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <small id="emailHelp" className="form-text text-muted">Debe ser un correo válido.</small>
            <div className="custom-control custom-switch">
              <input type="checkbox" className="custom-control-input" id="customSwitch1" />
              <label className="custom-control-label" for="customSwitch1">Urgente?</label>
            </div>
          </div>
          <div className="textarea form-group">
            <textarea
              className="form-control text-area"
              id="message"
              rows="3"
              placeholder="Deja tu mensaje"
              value={mssg}
              onChange={e => setMssg(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">{status}</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
