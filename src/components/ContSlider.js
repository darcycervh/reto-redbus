import React, { Component } from 'react';
// import { connect } from 'react-redux';
import Slider from 'react-slick';


export default class SimpleSlider extends Component  {
    render() {
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      return (
        <div className="carrusel col-sm-12 col-md-12 slider">
          <p>Selecciona dónde quieres pagar</p>
          <Slider {...settings}>
            <div className="col-sm-12 col-md-12 img-bancos">
                <a className="col-sm-2 col-md-2 item">
                   <img className="bcp" src="https://seeklogo.com/images/B/bcp-logo-87BA4231DF-seeklogo.com.png" alt="bcp" />
                    <span>Agentes y Bodegas <br/> </span>                
                </a>
                <a className="col-sm-2 col-md-2 item">
                   <img className="bbva" src="https://seeklogo.com/images/B/BBVA-logo-1771B74B07-seeklogo.com.png" alt="" />
                    <span>  </span>
                </a>
                <a className="col-sm-2 col-md-2 item"><img className="interbanck" src="https://mall-prod.spincorp.cl/uploads/stores/fa2fcf9809e0d69cc68e6f36c264a7ef.png"
                alt=""/>
                </a>
                <a className="col-sm-2 col-md-2 item"><img className="banbif" src="https://seeklogo.com/images/B/banbif-logo-669F43060A-seeklogo.com.png"
                alt=""/>
                </a>
                
            </div>
            <div className="col-sm-12 col-md-12 img-bancos">
                <a className="col-sm-2 col-md-2 item"><img className="bcp" src="https://botw-pd.s3.amazonaws.com/styles/logo-thumbnail/s3/042014/bcp-125anos.ai-converted.png?itok=kiH1e9T-" alt="bcp" /></a>
                <a className="col-sm-2 col-md-2 item"><img className="scotiabanck" src="https://s3-eu-west-1.amazonaws.com/rankia/images/valoraciones/0010/9330/fondos-mutuos-Banco-Scotiabank.jpg?1366901885" alt="" />
                </a>
                <a className="col-sm-2 col-md-2 item"><img className="western-union" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Western_Union_logo.svg/2000px-Western_Union_logo.svg.png" alt="bcp" />
                </a>
                <a className="col-sm-2 col-md-2 item"><img className="kasnet" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Western_Union_logo.svg/2000px-Western_Union_logo.svg.png" alt="bcp" />
                </a>
            </div>
          </Slider>
        </div>
      );
    }
  }

// const App = (props) => console.log(props) || (
//   <div>
//     <button onClick={() => props.dispatch({
//       type: 'DECREMENT',
//     })}>-</button>
//     <span>{props.count}</span>
//     <button onClick={() => props.dispatch({
//       type: 'INCREMENT',
//     })}>+</button>
//   </div>
// );

// const mapStateToProps = ({ count }) => ({
//   count,
// });

// export default connect(mapStateToProps)(App);