import React, { Component } from 'react';
import logo from '../assets/images/pago_efectivo.png';
import PropTypes from 'prop-types';
import '../css/Footer.css';

const Footer = ({enlace}) => (
  <footer>
    <div className="container">
      <div className="row">
        <div className="col-xs-12 text-center enlace">
          <a href=""><i className=""></i>{enlace}</a>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12 text-center download">Instrucciones vía<i className=""></i></div>
      <div className="row">
        <div className="col-xs-6 mail">Ayuda:
          <a href="mailto:contacto@redbus.pe">contacto@redbus.pe</a>
        </div>
        <div className="col-xs-6 image">Pago vía
          <img className="img-responsive" src={logo}/>
        </div>
        </div>
      </div>
    </div>
  </footer>
);

Footer.propTypes = {
  enlace:PropTypes.string.isRequired,
}

export default Footer;