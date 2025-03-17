import React, { useState } from 'react'
import Data from '../../Data.json'
import Aromatic from '../Aromatic'


const aromatics = () => {
    const [aromatics, setProducts] = useState(Data.aromatics)
    return (
        <div className="aromatics">
            <h1>Aromatic Fragrant Plants</h1>
            {
                aromatics.map(p => (

                     <Aromatic aromatic = {p}/>
                ))
            }
           

        </div>
    )

}
export default aromatics