import React from 'react';
import BankList from './ListItem'


const constBan = ({lista})=> (
    <div>
        <div>Seleciona donde quieres pagar</div>
     <ul className="cont-ul">
    {lista.map(listas => 
       <BankList 
        key={listas.name} 
        {...listas}
        />
    )}
    </ul>
        <div className="col-sm-12">
            <h4>Puedes pagar desde la Web o App movil del Banco</h4>
            <div>
               <h3>Instrucciones de Pago</h3> 
               <div className="col-sm-12">
                   <div className="num col-sm-1">1</div>
                   <div className="col-sm-7">Seleciona la opcion Pago de servicios > Busca por Empresa y escribe PAGOEFECTIVO
                   > Seleciona la Empresa PAGOEFECTIVO.</div>
               </div>
               <div className="col-sm-12">
                   <div className="num col-sm-1">2</div>
                   <div className="col-sm-7">Ingresa tu codigo CIP:{} y sigue los pasos</div>
               </div>     
            </div>    
            
        </div>   
    </div>
)
export default constBan
