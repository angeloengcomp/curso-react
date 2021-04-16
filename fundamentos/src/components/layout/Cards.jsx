import React from 'react'
import './Card.css'

export default props => {

    return (
        <div className="card">
            <div className="titulo">
                <h2>{props.tittle}</h2>
                
            </div>
            <div className="conteudo">                
                {props.children}
            </div>
            
        </div>
    )

}