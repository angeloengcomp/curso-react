import React from 'react'

export default function ComParam(props) {
    let status = props.nota >= 7 ? 'Aprovado' : 'Reprovado'
    return (
        <div>
            <h2>{props.titulo}</h2>
            <p>
                <strong>{props.aluno} </strong>

             foi  <strong>{status}</strong>  com nota {props.nota}!</p>

        </div>

    )


}