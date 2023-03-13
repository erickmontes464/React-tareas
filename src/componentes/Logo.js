import React from "react";
import imagen from '../imagenes/logo.png';
import '../css/Logo.css';

const Logo = () => (
  <div className='container-logo'>
    <img 
    src={imagen}
    className="logo"
    alt='Logotareas' />
  </div>
);

export default Logo;