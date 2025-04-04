import { useState } from 'react' //import usae state
import './CampoTexto.css'

const CampoTexto = (props) => {
    //let valor = 'baguga'
    //rook do estado
    const aoDigitado = (evento) =>{ //evento digitação(pega o que está sendo digitado)
        props.aoAlterado(evento.target.value) //valor que esta sendo inserido
    }

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input onChange={aoDigitado} value={props.valor} required={props.obrigatorio } placeholder={props.placeholder}></input>
        </div>
    );
}
export default CampoTexto