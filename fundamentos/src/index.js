import ReactDOM from 'react-dom'
import React from 'react'
import './index.css'
import Primeiro from './components/basics/primeiro'
import ComParametro from './components/basics/ComParametros'


ReactDOM.render(

    <div>
        <Primeiro/>
        <ComParametro
        titulo="Situação Aluno"
        aluno='Angelo Ricardo'
        nota={8.5}
        />
        
    </div>


, 
document.getElementById('root'))
