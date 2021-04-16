import React from 'react'

export default props => {
    //processo de destructuring
    let min = props.min
    let max = props.max

    //logica para gerar numero aleatorio entre 0,1 >> Math.random
    //Logica para gerar numero aleatorio entre dois valores >> Math.random()*(props.max-props.min)+props.min
    const valor = parseInt(Math.random()*(max-min)+min)

    return (

        <div>    
            <h1>Número Aleatório entre {min} e {max}: {valor}</h1>
        </div>   

    )

};








    










