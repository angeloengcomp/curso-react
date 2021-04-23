import React from 'react';
import produtos from '../../data/produtos';
import './TabelaProdutos.css'

export default (props) => {

    function getLinhas(){
        return produtos.map((produto,i) => {
            return (
                <tr key={produtos.id} className={i % 2==0? 'Par':'Impar'}>    

                <td>{produto.id}</td> <td>{produto.nome}</td> <td>R$ {produto.preco.toFixed(2).replace('.',',')}</td>    

                </tr>
            )            
        })
    }
    
    return (

        <div className="tabelaProdutos">

            <table border="0" >
                <thead>
                    <tr>
                        <th>ID</th> <th>Produto</th>   <th>Preço</th>
                    </tr>
                </thead>

                <tbody>
                    {/*Função de  Repetição */}
                    {getLinhas()}
                </tbody>
            </table>

        </div>
    )



}