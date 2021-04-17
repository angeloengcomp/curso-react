import React from 'react'
import './Card.css'

export default props => {

    const estilo = {
        backgroundColor : props.color || '#f00',
        borderColor : props.color || '#f00',
       
    }

    return (
        <div className="card">
            <div className="titulo" style={estilo}>
                <h2>{props.tittle}</h2>
                
            </div>
            <div className="conteudo">                
                {props.children}
            </div>
            
        </div>
    )

}