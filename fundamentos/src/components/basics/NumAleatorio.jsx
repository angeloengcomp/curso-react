import React from 'react'

export default (props) => {

    //logica para gerar numero aleatorio entre 0,1 >> Math.random
    //Logica para gerar numero aleatorio entre dois valores >> Math.random()*(props.max-props.min)+props.min
    const valor = Math.random()*(props.max-props.min)+props.min

    return (

        <div>    
            <h1>Número Aleatório {valor}</h1>
        </div>   

    )

};








    










