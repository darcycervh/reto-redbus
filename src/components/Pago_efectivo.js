import React, { Component } from 'react';
import Slider from 'react-slick'

// import Header from './Header';

export default class SimpleSlider extends Component {
    render() {
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      return (
        <div className="carrusel col-sm-12 col-md-12">
          <h2> Single Item</h2>
          <Slider {...settings}>
            <div className="col-sm-12 col-md-12">
                <a className="col-sm-2 col-md-2 item">
                   <img className="bcp" src="https://botw-pd.s3.amazonaws.com/styles/logo-thumbnail/s3/042014/bcp-125anos.ai-converted.png?itok=kiH1e9T-" alt="bcp" />
                    <span>Agentes y Bodegas <br/> </span>                
                </a>
                <a className="col-sm-2 col-md-2 item">
                   <img className="bcp" src="https://mall-prod.spincorp.cl/uploads/stores/fa2fcf9809e0d69cc68e6f36c264a7ef.png" alt="bcp" />
                    <span>Agentes y Bodegas Agencias</span>
                </a>
                <a className="col-sm-2 col-md-2 item"><img className="bcp" src="https://mall-prod.spincorp.cl/uploads/stores/fa2fcf9809e0d69cc68e6f36c264a7ef.png" alt="bcp" /></a>
                <a className="col-sm-2 col-md-2 item"><img className="bcp" src="https://mall-prod.spincorp.cl/uploads/stores/fa2fcf9809e0d69cc68e6f36c264a7ef.png" alt="bcp" /></a>
            </div>
            <div className="col-sm-12 col-md-12">
                <a className="col-sm-2 col-md-2 item"><img className="bcp" src="https://botw-pd.s3.amazonaws.com/styles/logo-thumbnail/s3/042014/bcp-125anos.ai-converted.png?itok=kiH1e9T-" alt="bcp" /></a>
                <a className="col-sm-2 col-md-2 item"><img className="bcp" src="https://mall-prod.spincorp.cl/uploads/stores/fa2fcf9809e0d69cc68e6f36c264a7ef.png" alt="bcp" /></a>
                <a className="col-sm-2 col-md-2 item"><img className="bcp" src="https://mall-prod.spincorp.cl/uploads/stores/fa2fcf9809e0d69cc68e6f36c264a7ef.png" alt="bcp" /></a>
                <a className="col-sm-2 col-md-2 item"><img className="bcp" src="https://mall-prod.spincorp.cl/uploads/stores/fa2fcf9809e0d69cc68e6f36c264a7ef.png" alt="bcp" /></a>
            </div>
          </Slider>
        </div>
      );
    }
  }

/*class PagoEfectivo extends Component {
    render(){
        return(
          <header></header> 
        )
    }

}

export default PagoEfectivo;*/