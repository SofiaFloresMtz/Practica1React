import React from 'react';
import './Footer.css';

function Footer(props){
    return(
        <div className="footerEstilo">
            {props.final}
        </div>
    );
}

export default Footer;