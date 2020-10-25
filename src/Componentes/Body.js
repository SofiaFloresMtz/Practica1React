import React from 'react';
import './Body.css';

function mifuncion(){
    alert("Soy Sofia, ¡Mucho gusto!");
}

function Body(props){
    return(
        <div>
            <div className="bodyEncabezado">
                <p>{props.tituloPractica}</p>
            </div>
            <div className="bodyEstilo">
                {props.arreglo.map((e,index)=>
                <p key={index}>{index+1}. {e}</p>)}
            </div>
            <div className="bodyPie">
                <button class="boton_personalizado" onClick={mifuncion}>
                    ¡Haz clic!
                </button>
            </div>
        </div>
    );
}

export default Body;