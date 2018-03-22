import React from 'react';
import PropTypes from 'prop-types';
import logo from '../assets/images/logo-pagoefectivo.svg';
import iconTime from '../assets/images/icon-time.svg';


import '../css/Header.css';

const Header = () => (
  
  <header>
    <div className>
      <div className="row pull-left">
         <img src={logo}/> 
      </div>
      <div className="col-md-12 enlaces">
        <a href="">Banca por internet</a>
        <a href="">Pago en efectivo</a>
      </div>
      
      <br/>
      <div className="row assets-pago">
        <div className="col-md-4 text-center codigo">
          <p>Código de pago</p>
          9125682
        </div>
        <div className="col-md-4 text-center monto">
          <p>TOTAL</p>
          s/ 140.00</div>
        <div className="col-md-4 text-center time"><img src={iconTime}/>Tu órden expirará: 
          23 Feb - 01:12 p.m.
        </div>
      </div>
    </div>
  </header>
);


Header.propTypes = {
  title:PropTypes.string.isRequired,
}

export default Header