import React from 'react';

function Button(props){
    return (
        <button onClick={props.handler} className="button-cinco formulario_btn">{props.text}</button>
    );
}

export default Button;