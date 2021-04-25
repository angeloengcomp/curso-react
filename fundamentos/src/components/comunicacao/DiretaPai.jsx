import React from 'react'
import DiretaFilho from './DiretaFilho'

export default props =>{

    return(
        <div>
            <DiretaFilho nome='Jon' numero={3} bool={true} />
            <DiretaFilho nome='Mary' numero={14} bool={true} />
            <DiretaFilho nome='Danilo' numero={5} bool={false} />

        </div>
    )
}