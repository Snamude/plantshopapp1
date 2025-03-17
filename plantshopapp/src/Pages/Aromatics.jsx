import React, { useState } from 'react'
import Data from '../../Data.json'
import Aromatic from '../Components/Aromatic'


export const Aromatics = () => {
    const [products, setProducts] = useState(Data.products)

    return (
        <div className="mt-2"><center><h4>Aromatic Fragrant Plants</h4></center>

        <div className="container mt-4">
            <div className='row row-cols-1 row-cols-md-3 g-4'>
        
            {
                products.map(p => (

                     <Aromatic products = {p}/>
                ))
            }
            
        </div>
       
        </div>
        </div>
       

    )
        }

export default Aromatics





