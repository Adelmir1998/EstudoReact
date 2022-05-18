import {useState} from "react";

export default function Mensagens(props){

    const [produto,setProduto] = useState ("");

    return(
        <div className="mensagens">

            {props.info.map((m, i)=>(

            

            <div key={i}>
            <h3>Titulo da Mensagem: {m.titulo}</h3>
            <h3>Autor: {m.autor}</h3>
            <p>Mensagem {m.mensagem}</p>
            <hr></hr>
            <br />
            </div>

            ))}

        </div>
    );
}