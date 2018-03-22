import React from 'react';
import '../css/App.css'

const ContUnSlider = ({listBanks}) => (
  <div className="container"> 
    <div className="row content-img">
    <p>Selecciona dónde quieres pagar</p>
    {listBanks.map((list,key)=> 
        <img className="bancos-internet" key={key} src={list.bank}
        />
      )}
      <p>Puedes pagar desde la web o App movil del banco</p>
    </div>
  </div>
);

export default ContUnSlider;

// import React from 'react';
// import BankList from './ListItem'


// const contBank = ({lista})=> (
//     <div>
//         <div>Seleciona donde quieres pagar</div>
//      <ul className="cont-ul col-sm-12 col-md-12">
//     {lista.map(listas => 
//        <BankList 
//         key={listas.name} 
//         {...listas}
//         />
//     )}
//     </ul>
//         <div className="col-sm-12">
//             <h4>Puedes pagar desde la Web o App movil del Banco</h4>
//             <div>
//                <h3>Instrucciones de Pago</h3> 
//                <div className="col-sm-12">
//                    <div className="num col-sm-1">1</div>
//                    <div className="col-sm-7">Seleciona la opcion Pago de servicios > Busca por Empresa y escribe PAGOEFECTIVO
//                    > Seleciona la Empresa PAGOEFECTIVO.</div>
//                </div>
//                <div className="col-sm-12">
//                    <div className="num col-sm-1">2</div>
//                    <div className="col-sm-7">Ingresa tu codigo CIP:{} y sigue los pasos</div>
//                </div>     
//             </div>    
            
//         </div>   
//     </div>
// )
// export default contBank;

// const reducer = (state = {
//   count: 0,
// }, action) => {
//   switch (action.type) {
//       case 'INCREMENT':
//           return { count: state.count + 1 }
//       case 'DECREMENT':
//           return { count: state.count - 1 }
//       default:
//           return state;
//   }
// };

// const store = createStore(reducer);

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root'),
// );

