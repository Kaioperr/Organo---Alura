import './ListaSuspensa.css'

const ListaSuspensa = (props) =>{
    return (
        <div className='lista'>
            <label>{props.label}</label> {/*Recebe o valor da lebal la no formulario */}
            <select

            onChange={evento => props.aoAlterado(evento.target.value)}
            value={props.valor} required={props.obrigatorio}>
            <option value={""}> </option>
            
             {props.itens.map(item => <option key={item}>{item}</option>)} {/* a cada item recebido sera retornado uma option com o valor desse item. O map vai iterar nos valores colocados na lista time, e retornara o valor  envolvido em um option dentro do select*/ }

                {/* A key serve pra identificar o itme, é um aboa pratica ja que os componentes podem ser enormes, ajuda o react a saber quando tem que renderizar */}
            </select>
        </div>
    );
}
export default ListaSuspensa 