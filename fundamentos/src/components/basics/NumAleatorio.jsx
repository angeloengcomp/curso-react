import React from 'react'

export default props => {
    //processo de destructuring
    // let {min,max}=props;


    let min = props.min
    let max = props.max

    //lógica para gerar numero aleatório entre 0,1 >> Math.random
    //lógica para gerar numero aleatório entre dois valores >> Math.random()*(props.max-props.min)+props.min
    let valor = parseInt(Math.random()*(max-min)+min)

    return (

        <div>    
            <h3>Número Aleatório entre {min} e {max}: {valor}</h3>
        </div>   

    )

};








    










