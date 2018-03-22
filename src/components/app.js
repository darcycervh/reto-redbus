import React from 'react';
import '../css/App.css';
import BancaInternet from './Banca_internet';
import PagoEfectivo from './Pago_efectivo';
import Header from './Header';

const App = () => (
  <div>
    
    <BancaInternet/>
    <PagoEfectivo/>
  </div>
);

export default App;

