import React from 'react'

export default props => {
    const cb=props.qndClicar
    return (
        <div>
            <div>
                Filho
            </div>
            <button onClick={_=>cb('joão', 34, true)}> ENVIAR INFORMAÇÕES PARA O PAI</button>
        </div>
    )
}