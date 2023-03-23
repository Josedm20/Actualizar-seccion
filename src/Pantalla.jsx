import React from 'react'
import { useState } from 'react'

function Pantalla({ texto }) {

    const [contador, setContador] = useState(0);

    function incremento() {
        setContador(contador + 1);
    }
    function disminuir() {
        setContador(contador - 1);
        { Parar() }
    }

    let Parar = function () {
        if (contador <= 0) {
            setContador(0)
        }
    }

    return (
        <div className='App'>
            <h1>{contador}</h1>
            <button onClick={incremento}>incrementar</button>
            <button onClick={disminuir}>disminuir</button>
        </div>
    )
}

export default Pantalla