import React from 'react'

const BankList = ({ name, bank }) => (
    <li className="list-group-item col-sm-1">
    <a href="#">
      <div className="artist-list">
        <div>
          <img className ="img-fluid"
            src = {bank}
            alt = {name} 
          />
        </div>
      </div>
    </a>  
    </li>
  )
  
  export default BankList