import React, { useContext } from 'react';
import { BsCart } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { CartContext } from '../Features/ContextProvider';

const Navbar = () => {
    const {cart} = useContext(CartContext)
    return (
        <div className='d-flex justify-content-between bg-success p-3 px-5 text-white'>
            <Link to='/' className='navbar-brand fs-4 fw-bolder'><p>Green Thumb</p>
           </Link>
            <Link to='/cart' className='navbar-link fs-2 text-white'>
            <BsCart />{cart.length}</Link>
        </div>
       
    )
}

export default Navbar 