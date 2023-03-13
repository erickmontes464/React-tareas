import React from "react";
import '../css/tarea.css';
import { AiOutlineDelete } from 'react-icons/ai';

const Tarea = ({ id, texto, completada, completarTarea, eliminarTarea }) => (
  <div className={completada ? 'tarea-contenedor completada':'tarea-contenedor'}>
    <div 
      className="tarea-texto"
      onClick={()=> completarTarea(id)}>
      {texto}
    </div>
    <div 
    className='container-icons' 
    onClick={() => eliminarTarea(id)}>
    <AiOutlineDelete className="tarea-icono" />
    </div>
  </div>
);

export default Tarea; 