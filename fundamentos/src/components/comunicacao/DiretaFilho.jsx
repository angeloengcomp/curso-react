import React from 'react'

export default props =>{
    return (
       
        <div>
            <span>{props.nome} </span>
            <span>{props.numero} </span>
            <span>{props.bool ? 'verdadeiro':'falso'}</span>
        </div>
    )
}