import React, { useContext, useState } from "react";
import { CartContext } from "../Features/ContextProvider";
import saleicon from '../Components/saleicon.jpg'

const Product = ({ product }) => {
    const { dispatch, cart } = useContext(CartContext);
    const [isAdded, setIsAdded] = useState(false);

    const handleAddToCart = () => {
        setIsAdded(true);
        dispatch({ type: "Added", product: product });
    };

    return (
        <div className="col mt-6">
            <div className="card">
                <div className="card-body">  
                <img src={saleicon}
                            height={80}
                            className="p-3 d-flex mt-220"
                            alt="..."
                        />    
                  <center>
                        <img
                            src={product.thumbnail}
                            height={229}
                            className="p-3 d-flex"
                            alt="..."
                        />
                    </center>
                    <center>
                        <b>
                            <h8 className="card-title">{product.title}</h8>
                        </b>
                    </center>
                    <h6>
                        <p className="card-text">{product.description}</p>
                    </h6>
                    <center>
                        <h5 className="">${product.price}</h5>
                        <button
                            className="btn btn-primary" 
                            onClick={handleAddToCart}
                            disabled={isAdded}
                        >
                            {isAdded ? "added" : "Add to Cart"}
                            
                        </button>
                    </center>
                </div>
            </div>
        </div>
        
      
    );
};

export default Product;