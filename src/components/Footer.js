import React, { Component } from 'react';
import logo from '../assets/images/logo-pagoefectivo.svg';
import iconPrint from '../assets/images/icon-print.svg';
import iconArrow from '../assets/images/icon-arrow.svg';
import PropTypes from 'prop-types';
import '../css/Footer.css';

const Footer = ({enlace}) => (
  <footer>
    <div className="container">
      <div className="row">
        <div className="col-xs-12 text-center enlace">
          <a href="https://ubicanos.pagoefectivo.pe/#/?tienda=[idServicio]&moneda=1&monto=100.00&ubicame=true&_k=mqw01x"><img src={iconArrow}/>{enlace}</a>
        </div>
      </div>
      <div className="row referencies">
        <div className="pull-left col-md-4 download">Instrucciones vía<img src={iconPrint}/>
        </div>
        <div className="col-md-4 text-center mail">Ayuda:
          <a href="mailto:contacto@redbus.pe">contacto@redbus.pe</a>
        </div>
        <div className="pull-right text-center col-md-4 image">Pago vía
          <img className="img-responsive" src={logo}/>
        </div>
      </div>
    </div>
  </footer>
);

Footer.propTypes = {
  enlace:PropTypes.string.isRequired,
}

export default Footer;