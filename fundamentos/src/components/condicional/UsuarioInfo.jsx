import React from 'react';
import If from './if';

export default props => {

    const usuario = props.usuario

    return(

        <If test={usuario && usuario.nome}>
            <div>
                Seja Bem Vindo <strong>{usuario.nome}</strong>!
            </div>
        </If>
    )


}