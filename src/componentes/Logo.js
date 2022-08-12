import React from 'react';
import '../hojas-de-estilos/Logo.css';
import freeCodeCampLogo from '../imagenes/freecodecamp-logo.png';

const Logo = () => (
  <div className='freecodecamp-logo-contenedor'>
    <img className='freecodecamp-logo' src={freeCodeCampLogo} alt="Logo de FreeCodeCamp" />
  </div>
);

export default Logo;