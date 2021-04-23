import React from 'react';
import tabela from '../../data/produtos';


export default (props) =>{
    const tabelaProdutos = tabela.map((tabela)=>{
        return(
            <tr key={tabela.id}>
                <td>{tabela.id}</td><td>{tabela.nome}</td><td>{tabela.preco}</td>
            </tr>
        )
    });

    return(
        
        <div>

            <table>
                {tabelaProdutos}
            </table>

        </div>
    )



}