import React from "react";
import { useState } from "react";

function Juego() {
    let opc = ['Piedra', 'Papel', 'Tijera'];

    const [Human, setHuman] = useState('')
    const [Robot, setRobot] = useState('')

    let JuegoMaquina = () => {
        let randomOpcMaquina = Math.round(Math.random() * (opc.length - 1));
        setRobot(opc[randomOpcMaquina])
    }

    let JuegoHuman = (e) => {
        setHuman(e.target.innerText)
        JuegoMaquina()
    }

    let Ganador = function () {
        if (Human === 'Piedra' && Robot === 'Tijera') {
            alert('Human won')
        } else if (Human === 'Papel' && Robot === 'Piedra') {
            alert('Human won')
        } else if (Human === 'Tijera' && Robot === 'Papel') {
            alert('Human won')
        } else if (Human === Robot) {
            alert('Empate')
        }
        else {
            alert('Robot won')
        }
    }

    return (
        <div className="Pantalla">
            <div>
                <h4>Human</h4>
                <h1>{Human}</h1>
            </div>
            <div>
                <h4>Robot</h4>
                <h1>{Robot}</h1>
            </div>
            <div>
                <button onClick={JuegoHuman}>Piedra</button>
                <button onClick={JuegoHuman}>Papel</button>
                <button onClick={JuegoHuman}>Tijera</button>
                <button onClick={Ganador}>Ganador</button>
            </div>
        </div>
    )
}
export default Juego