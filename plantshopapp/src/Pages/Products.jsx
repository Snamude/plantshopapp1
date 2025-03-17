import React, { useState } from 'react'
import Data from '../../Data.json'
import Product from '../Components/Product'

const Products = () => {
    const [products, setProducts] = useState(Data.products)

    return (
        <div className="mt-2"><center><h4>Air Purifying Plants</h4></center>
        
        <div className="container mt-4">
            <div className='row row-cols-1 row-cols-md-3 g-4'>
        
            {
                products.map(p => (

                     <Product product = {p}/>
                ))
            }
            
        </div>
        </div>
        </div>
        

    )

    
        }

export default Products







