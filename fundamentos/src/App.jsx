import React from 'react'

import Primeiro from './components/basics/primeiro'
import ComParametro from './components/basics/ComParametros'
import Fragment from './components/basics/Fragmento'
import NumAleatorio from './components/basics/NumAleatorio'
import Cards from './components/layout/Cards'

export default _ =>

    <div>
        <h1>Fundamentos React</h1>
        
        <Cards tittle="Número Aleatório">
        <NumAleatorio min={1} max={99}/> 
        </Cards>
       
        <Cards tittle="Primeiro Compomente">
            <Primeiro />        
        </Cards>
        
        <Cards tittle="Paramentros">
            <ComParametro
                titulo="Situação Aluno"
                aluno='Angelo Ricardo'
                nota={8.5}
            />
        </Cards>
        
        <Cards tittle="Fragment">
        <Fragment />
        </Cards>

    </div>


