import Colaborador from '../Card/Colaborador';
import './Time.css'
const Time = (props) =>{
    const secundaria = {backgroundColor: props.corSecundaria}
    const primaria = {borderColor:props.corPrimaria}
    return (
        
        (props.colaboradores.length >0) ? <section className='time' style={secundaria}>
            <h3 style={primaria}>{props.nome}</h3>

            <div className='colaboradores'>
            {props.colaboradores.map(colaborador => <Colaborador corFundo={props.corPrimaria} key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem}/>)}
            </div>
        </section>
            : ''
    );
}

export default Time