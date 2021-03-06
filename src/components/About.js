import React from 'react';
import {Image} from 'react-bootstrap';
import '../App.css';
import Directiva from './Directiva.js';
import Anuncio from './Anuncio.js';

import {integrantes} from './Integrantes.json';
import {Row,Container} from 'reactstrap';
import perfilFlo from '../images/perfilFlo.jpg';
import perfilBenja from '../images/perfilBenja.jpeg';
import perfilMily from '../images/perfilMily.jpg';
import perfilMati from '../images/perfilMati.jpg';
import perfilIsi from '../images/perfilIsi.jpg';
import solidaridad from '../images/solidaridad.jpg';


class About extends React.Component{
    constructor(){
        super();
        this.state={
            integrantes
        };
      }
  
  
  render(){
   
    return (
    <div>
        
        <h1 style={{textAlign:'justify', margin:"50px"}}>Sobre nosotros</h1>
        <h2 style={{textAlign:'justify', margin:"50px"}}>Nuestra Directiva</h2>
        <Container>
          <Container>
            <Directiva
              
              imagen= {perfilFlo}
              cabezal={integrantes[0].cabezal}
              contenido={integrantes[0].contenido}
              mail = {integrantes[0].mail}
              />
            </Container>
          <Container>
          <Directiva
              
              imagen= {perfilMily}
              cabezal={integrantes[1].cabezal}
              contenido={integrantes[1].contenido}
              mail = {integrantes[1].mail}
              />
           
          </Container>
          <Container>
          <Directiva
              
              imagen= {perfilIsi}
              cabezal={integrantes[2].cabezal}
              contenido={integrantes[2].contenido}
              mail = {integrantes[2].mail}
              />
          </Container>
          <Container>
          <Directiva
             
              
              cabezal={integrantes[3].cabezal}
              contenido={integrantes[3].contenido}
              mail = {integrantes[3].mail}
              />
          </Container>
        <Container>
          <Directiva
               imagen= {perfilMati}
              cabezal={integrantes[4].cabezal}
              contenido={integrantes[4].contenido}
              mail = {integrantes[4].mail}
              />
          </Container>
          <Container>
          <Directiva
               imagen= {perfilBenja}
               cabezal={integrantes[5].cabezal}
               contenido={integrantes[5].contenido}
               mail = {integrantes[5].mail}
               />
          </Container>
          <div style={{textAlign:'justify'}}>
            <h2>Miembros de nuestra Lista</h2>
          </div>
          
          <Container style={{textAlign:'justify'}}>
            <h3>Encargada de media</h3>
            <ul>
              <li>Camila Torres (10??C)</li>
            </ul>
            
            <h3>Encargados de b??sica</h3>
            <ul>
              <li>Laura Carvajal (7??B)</li>
              <li>Simon Fuentes (7??B)</li>
              <li>Gracia Villanueva (7??C)</li>
            </ul>
            <h3>Encargado de operaciones y log??stica</h3>
            <ul>
              <li>Arturo Vergara (12??C)</li>
              <li>Fernando Jarra (12??B)</li>
            </ul>
            <h3>Delegados de arte y cultura</h3>
            <ul>
              <li>Elena de la Cruz </li>
              <li>Valentina Maldonado (8??B)</li>
              <li>??tia Winkler (8??C)</li>
              <li>Amparo Camiroaga (8??C)</li>
              <li>Ver??nica Garcia (10??C)</li>
            </ul>
            <h3>Delegados de m??sica</h3>
            <ul>
              <li>Sebastian Ceries (9??C)</li>
              <li>Juan Cristobal (10??B)</li>
            </ul>
            <h3>Delegados de medio ambiente</h3>
            <ul>
              <li>Amanda Velazco (7??C)</li>
              <li>Beatriz Olivares (10??A)</li>
              <li>Agust??n Ly (11??A)</li>
              <li>Florencia Delgado (11??B)</li>
              <li>Catalina Arn??s (11??B)</li>
            </ul>
            <h3>Delegados de deporte</h3>
            <ul>
              <li>Jos?? Ignacio Gort??zar (12??A)</li>
              <li>Tobias Rietschen (7??C)</li>
            </ul>
            <h3>Delegaci??n feminista</h3>
            <ul>
              <li>Espe Gonz??lez (7??A)</li>
              <li>Helena Aldoney (7??C)</li>
              <li>Elisa Monsalve (9??B)</li>
              <li>Rocio Rodriguez (9??C)</li>
              <li>Antonia Schmohl (10??B)</li>
              <li>Milena Adrian (12??B)</li>
            </ul>
            <h3>Comit?? de solidaridad</h3>
            
            
            <ul>
              <li>Javiera Le??n (7??C)</li>
              <li>Benjam??n Rojas (9??B)</li>
              <li>Isidora Gonz??lez (12??A)</li>
              
            </ul>
            <Image src={solidaridad} fluid style={{marginBottom:'10px'}}></Image>
          </Container>
        </Container>
        
        
        
      
      
    </div>
  );
}
}

export default About;
