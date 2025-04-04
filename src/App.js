
import { useState } from 'react';
import Banner from './componentes/Banner/banner';
import Formulario from './componentes/Formulario/Formulario';
import Time from './componentes/Time/Time';



function App() {

  //lista dos times com as cores, array de objetos, global
  const times = [
    {
      nome:'Programação',
      corPrimaria:'#57C278',
      corSecundaria :'#d9f7e9',
    },
    {
      nome:'Front-End',
      corPrimaria:'#82CFFA',
      corSecundaria:'#E8F8FF',
    },
    {
      nome:"Data Science",
      corPrimaria:'#A6D157',
      corSecundaria:'#F0F8E2',
    },
    {
      nome:'Devops',
      corPrimaria:'#E06B69',
      corSecundaria:'#FDE7E8',
    },
    {
      nome:'UX e Design',
      corPrimaria:'#DB6EBF',
      corSecundaria:'#FAE9F5',
    },
    {
      nome:'Mobile',
      corPrimaria:'#FFBA05',
      corSecundaria:'#FFF5D9',
    },
    {
      nome:'Inovação e Gestão',
      corPrimaria:'#FF8A29',
      corSecundaria:'#FFEEDF',
    },
    

  ];

  //state dos colaboradores
  //colaboradores- antigos, ja salvos
  //colaborador - atual sendo adicionado
  const [colaboradores, setColaboradores] = useState([])
  const aoNovoColaboradorAdicionado = (colaborador) =>{
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])

  }

  return (
    <div className="App">
      <Banner/>
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado = {colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
      {times.map(time => <Time 
      key={time.nome} 
      nome={time.nome}  
      corPrimaria={time.corPrimaria} 
      corSecundaria={time.corSecundaria} 
      colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}//estado de colaboradores, colaboradores sendo filtrados
      />)}  
      {/* iteração dos times, para cada time(da lista de objetos time) crie um componente time com o nome crespectuvamente, a key o react saber qual elemente ele deve atualizar ou não*/}
    </div>
  );
}

export default App;
