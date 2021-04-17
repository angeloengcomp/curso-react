import React from 'react'

export default function ComParam(props) {
    let status = props.nota >= 7 ? 'Aprovado' : 'Reprovado'
    return (
        <div>
            <h3>{props.titulo}</h3>
            <p>
                <strong>{props.aluno} </strong>

             foi  <strong>{status}</strong>  com nota {props.nota}!</p>

        </div>

    )


}