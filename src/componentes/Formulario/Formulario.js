import { useState } from "react";
import Botao from "../Botao/Botao";
import CampoTexto from "../CampoTexto/CampoTexto";
import ListaSuspensa from "../ListaSuspensa/ListaSuspensa";

import './Formulario.css'

const Formulario = (props) => {


  const aoSalvar = (evento) =>{
    evento.preventDefault()//previne o comportamento padrão
    console.log("Form foi submetido =>", nome, cargo, imagem, time)

    //objeto do colaborador cadastrado
    props.aoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time
    })
    setNome('')
    setCargo('')
    setTime('')
    setImg('')
    
  }

  //states das caixa e texto - - valores padões dos inputs
  const [nome, setNome] = useState("")
  const [cargo, setCargo] = useState("")
  const [imagem, setImg] = useState("")
  const [time, setTime] = useState("")

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}> 
        <h2>Preencha os campos abaixo</h2>
        <CampoTexto
         obrigatorio={true}
         label="Nome"
         placeholder="Digite seu Nome"
         valor ={nome}
         aoAlterado = {valor => setNome(valor)}
           />

        <CampoTexto 
        obrigatorio={true}
        label="Cargo"
        placeholder="Digite seu cargo"
        valor ={cargo}
        aoAlterado = {valor => setCargo(valor)}
           />
           
        <CampoTexto 
        label="Imagem"
        placeholder="Informe o endereço da imagem"
        valor ={imagem}
         aoAlterado = {valor => setImg(valor)}

          />
        <ListaSuspensa 
        obrigatorio={true} 
        label='Time' 
        itens={props.times} //atributo times colocado na tag formlulario em app.js
        valor={time}
        aoAlterado = {valor => setTime(valor)}

        />
        <Botao>Criar Card</Botao>
      </form>
    </section>
  );
};
export default Formulario;
