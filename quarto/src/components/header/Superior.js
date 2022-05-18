import Cabecalho from "./Cabecalho";
import Logo from "./Logo";

export default function Superior(){
    const dados ={
        img: "./img/logo1.png",
        usuario:"Guilherme "
    }
    return(
        <div className="header">
            <Logo img= {dados.img}/>
            <Cabecalho user ={dados.usuario}/>
        </div>
    )
}