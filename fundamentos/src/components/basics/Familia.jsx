import React from 'react'
import FamiliaMembro from './FamiliaMembro'

export default props => {

    return (
        <div>
            <FamiliaMembro nome='Antonio' sobrenome={props.sobrenome}></FamiliaMembro>
            <FamiliaMembro {...props}></FamiliaMembro>
            <FamiliaMembro nome ='Gustavo' sobrenome='Lima'></FamiliaMembro>
        </div>
    )


}

