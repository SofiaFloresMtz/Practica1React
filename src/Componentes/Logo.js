import React,{Component} from 'react';

import logo from '../logoEscuela.PNG'

class Imagen extends Component{
    render(){
        return(
            <div>
                <img src={logo} alt="logo" />
            </div>
        );
    }
}

export default Imagen;