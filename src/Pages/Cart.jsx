import React, { useContext } from 'react'
import { CartContext } from '../Features/ContextProvider'
import CartProduct from '../Components/CartProduct'
import { totalItem, totalPrice } from '../Features/CartReducer'
import { Link } from 'react-router-dom';

const Cart = () => {
    const {cart} = useContext(CartContext)

    const showAlert = () => {
        alert('Coming Soon.');
      };

  return (
    <div className="mt-2"><center><h4>Your Cart</h4></center>
    <div className="container mt-3">
    <div className="row">
        <div className="col-8">
            {cart.map(p => (
                <CartProduct product={p}></CartProduct>
            ))}
                                     
        </div>
        <div className="col-4">
                <div className="bg-info p-3 text-white">
                    <h5 className="">Total Plants: {totalItem(cart)}</h5>
                    <h5 className="">Total Price: ${totalPrice(cart)}</h5>
                    <button onClick={showAlert} className='btn btn-warning'>Checkout</button>
                    <p></p>
                   <p>
                    <Link to='/'><button className='btn btn-warning'>Continue Shopping</button></Link>
                    </p>
                </div>
        </div>

    </div>
    
    </div>
    </div>
   
    )
}

export default Cart