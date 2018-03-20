import React, { Component } from 'react';
import PropTypes from 'prop-types'

const Footer = ({enlaceTitle}) => (
  <footer>
    <div className="container">
      <div className="row">
        <div className="col">
          <a href=""><span></span>{enlaceTitle}</a>
        </div>
      </div>
      <div className="row">
        <p className="col">Instruccines vía<i></i></p>
        <p className="col">Ayuda <a href="mailto:contacto@redbus.pe">contacto@redbus.pe</a></p>
        <p className="col">logo</p>
      </div>
    </div>
  </footer>
  
);

Footer.propTypes = {
  enlaceTitles:PropTypes.string.isRequired,
}

export default Footer;