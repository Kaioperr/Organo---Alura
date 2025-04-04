import './Botao.css'
const Botao = (props) =>{
    return(
            <button className='btn-envio'>{props.children}</button> 
    );
}
export default Botao
//O children é uma forma de não se limitar a texto ou imagem... fazendo com que o componente seja mais reutilizavel

//no formulario o que a gente colocar entre as tags botao sera considerado, podendo ser texto, icon, img e etc