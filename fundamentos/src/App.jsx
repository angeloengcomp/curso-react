import React from 'react'

import Primeiro from './components/basics/primeiro'
import ComParametro from './components/basics/ComParametros'
import Fragment from './components/basics/Fragmento'
import NumAleatorio from './components/basics/NumAleatorio'

export default _ =>

    <div>
        <h1>Primeiro App</h1>
        <NumAleatorio
        min={1}
        max={99}
        /> 

        <Primeiro />
        <ComParametro
            titulo="Situação Aluno"
            aluno='Angelo Ricardo'
            nota={8.5}
        />
        <Fragment />

    </div>


