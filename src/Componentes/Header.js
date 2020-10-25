import React,{Component} from 'react';
import './Header.css'

class Header extends Component{
    render(){
        return(
            <div className="headerEstilo">
                <p>
                    {this.props.titulo}
                    {this.props.fecha}
                </p>
            </div>
        );
    }
}

export default Header;