import React from 'react'
import './App.css'
import Primeiro from './components/basics/primeiro'
import ComParametro from './components/basics/ComParametros'
import Fragment from './components/basics/Fragmento'
import NumAleatorio from './components/basics/NumAleatorio'
import Cards from './components/layout/Cards'
import Familia from './components/basics/Familia'
import FamiliaMembro from './components/basics/FamiliaMembro'
import ListaAlunos from './components/repeticao/ListaAlunos'
import TabelaProdutos from './components/repeticao/TabelaProdutos'
import ParOuImpar from './components/condicional/ParOuImpar'
import UsuarioInfo from './components/condicional/UsuarioInfo'
import DiretaPai from './components/comunicacao/DiretaPai'
import IndiretaPai from './components/comunicacao/IndiretaPai'
import Input from './components/formulario/Input'
export default _ =>

    <div className="app">
        <h1>Fundamentos React</h1>


        <div className="cards">
            <Cards tittle='#11 - Componente Controlado' color='#3d5af1'>
                <Input></Input>


            </Cards>
            <Cards tittle="#9 - Comunicação Indireta" color='#fe8a71 '>
                <IndiretaPai></IndiretaPai>
            </Cards>
            <Cards tittle="#9 - Comunicação Direta" color='#adcbe3 '>
                <DiretaPai></DiretaPai>

            </Cards>

            <Cards tittle="#8 - Condicional" color='#f6abb6'>
                <ParOuImpar numero='21'></ParOuImpar>
                <UsuarioInfo usuario={{nome:'Jose'}}></UsuarioInfo>

            </Cards>

            <Cards tittle="#7 - Tabela de Produtos" color='#fe9c8f'>
                <TabelaProdutos></TabelaProdutos>
            </Cards>

            <Cards tittle="#6 - Lista de Alunos" color='#3da4ab '>
                <ListaAlunos></ListaAlunos>

            </Cards>

            <Cards tittle="#5 - Componente com filhos" color="#630CBF">
                <Familia sobrenome='Anjos'>
                    <FamiliaMembro nome='Angelo'></FamiliaMembro>
                    <FamiliaMembro nome='Jon'></FamiliaMembro>
                    <FamiliaMembro nome='Danilo'></FamiliaMembro>
                </Familia>
            </Cards>

            <Cards tittle="Número Aleatório" color="#658CBF">
                <NumAleatorio min={1} max={99} />
            </Cards>

            <Cards tittle="Primeiro Compomente" color="#2A4759">
                <Primeiro />
            </Cards>

            <Cards tittle="Paramentros" color="#F2AF5C">
                <ComParametro
                    titulo="Situação Aluno"
                    aluno='Angelo Ricardo'
                    nota={8.5}
                />
            </Cards>

            <Cards tittle="Fragment" color="#D98F8F">
                <Fragment />
            </Cards>

        </div>

    </div>


