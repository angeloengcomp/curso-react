import ReactDOM from 'react-dom'
import React from 'react'
import './index.css'
import Primeiro from './components/basics/primeiro'
import ComParametro from './components/basics/ComParametros'
import Fragment from './components/basics/Fragmento'

ReactDOM.render(

    <div>
        <Primeiro/>
        <ComParametro
        titulo="Situação Aluno"
        aluno='Angelo Ricardo'
        nota={8.5}
        />
        <Fragment/>
        
    </div>


, 
document.getElementById('root'))
