import React from 'react'
import { useState } from 'react'
import './Reto.css'

function Reto() {

  const [curso, setCurso] = useState('Dibujo');
  const [software, setSoftware] = useState('Illustrator');
  const [descripcion, setDescripcion] = useState('Curso sobre vectores');
  const [image, setImage] = useState('./IMG/car.jpg');

  const changeCourse = (e) => {
    e.preventDefault();
    const valueInput = e.target.previousSibling.value;
    setCurso(valueInput)

    e.target.previousSibling.value = '';
  }

  const changeSoftware = (e) => {
    e.preventDefault();
    const valueInput = e.target.previousSibling.value;
    setSoftware(valueInput)

    e.target.previousSibling.value = '';
  }

  const changeDescripcion = (e) => {
    e.preventDefault();
    const valueInput = e.target.previousSibling.value;
    setDescripcion(valueInput)

    e.target.previousSibling.value = '';
  }

  const changeImage = (e) => {
    e.preventDefault();
    const valueInput = e.target.src;
    setImage(valueInput)
  }

  return (
    <div className='row'>
      <div className='col-12 col-lg-6 coli d-flex justify-content-start align-items-center' style={{ background: `url(${image}) center/cover` }}>
        <div className='ms-4'>
          <h1 className='text-light'>Curso de {curso}</h1>
          <h5 className='text-light my-2'>SoftWare: {software}</h5>
          <p className='text-light'>{descripcion}</p>
          <button className='px-4 border'>!Inscribete¡</button>
        </div>
      </div>
      <div className='col-12 col-lg-6 d-flex justify-content-center align-items-center my-4'>
        <form action="">
          <div>
            <input className='form-control pad' autoComplete='off' id='cursos' type="text" placeholder='Nombre del Curso' />
            <button className='px-3 border mt-3' onClick={changeCourse}>Actualizar</button>
          </div>
          <div className='my-4'>
            <input className='form-control pad' type="text" placeholder='Software' />
            <button className='px-3 border mt-3' onClick={changeSoftware}>Actualizar</button>
          </div>
          <div>
            <textarea className='form-control pad pad2' type="area-text" placeholder='Descripción' />
            <button className='px-3 border mt-3' onClick={changeDescripcion}>Actualizar</button>
          </div>
          <div className='mt-4' onClick={changeImage}>
            <p className='fw-bolder'>Nueva Imagen:</p>
            <a href="i"><img cursor='pointer' className='me-2' src="../IMG/car.jpg" alt="" width="80px" height="50px" /></a>
            <a href=""><img cursor='pointer' className='me-2' src="../IMG/K6Rz.gif" alt="" width="80px" height="50px" /></a>
            <a href=""><img cursor='pointer' className='me-2' src="../IMG/film.jpg" alt="" width="80px" height="50px" /></a>
            <a href=""><img cursor='pointer' src="../IMG/3d.jpg" alt="" width="80px" height="50px" /></a>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Reto