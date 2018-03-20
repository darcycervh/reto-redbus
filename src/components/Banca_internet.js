import React, { Component } from 'react';
import Header from './Header';
import constBan from './cont-banco'

const listBank = [
          {bank1:'https://botw-pd.s3.amazonaws.com/styles/logo-thumbnail/s3/042014/bcp-125anos.ai-converted.png?itok=kiH1e9T-'} , 
          {bank2:'https://botw-pd.s3.amazonaws.com/styles/logo-thumbnail/s3/0002/3894/brand.gif?itok=tPHKhTyN'},
          {bank3:'https://www.cyberpag.com/wp-content/uploads/2014/06/LogoInterbank.png'},
          {bank4:'https://mall-prod.spincorp.cl/uploads/stores/fa2fcf9809e0d69cc68e6f36c264a7ef.png'},
          {bank5:'http://www.hablemosmassimple.com/Files/Media/b8340d9d-6791-4770-a101-2a065e009a37.jpg'}
        ]

class BancaInternet extends Component {
    render(){
        return(
            <div>
                <Header/>
                <constBan />
            </div>
        )
    }

}
export default BancaInternet;