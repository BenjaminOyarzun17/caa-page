import React from 'react';

import { Media } from 'reactstrap';


class Directiva extends React.Component{
    render(){
        return(
        
        <Media >
            <Media left href="#">
              <img style={{width: "200px",
  height: "200px"}} src='https://lh3.googleusercontent.com/V45ZUOJ4ilM6bYcgfEDVWCSkxi1lhNYx96qS1CVrtpuAuGdMUCy0L5ihhK2gYh1kPSIHjfXbfpeK3HNBtXrc=s400' alt='imagen perfil'></img>
              
              
            </Media>
            <Media body>
              <Media heading style={{marginLeft: "5px"}}>
              <p style={{textAlign: "justify"}}>{this.props.cabezal}</p>
              </Media>
              <p style={{textAlign: "justify",marginLeft: "5px"}}><b>Contacto</b>: {this.props.mail}
              <br></br>
              {this.props.contenido}              
              </p>
            </Media>
        </Media>
       
        
        


        )
}
}
export default Directiva;