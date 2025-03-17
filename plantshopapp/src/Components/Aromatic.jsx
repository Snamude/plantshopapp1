import React, { useContext, useState } from "react";
import { CartContext } from "../Features/ContextProvider";

export const Aromatic = ({ aromatic }) => {  
    
    const { dispatch } = useContext(CartContext);

    return (       
        <div className="col mt-2">
            <div className="card">
            <div className="card-body">
  <center><img src={aromatic.thumbnail} height={229} class="p-3 d-flex" alt="..." /></center>
  <center><b><h8 class="card-title">{aromatic.title}</h8></b></center>
    <h6><p class="card-text">{aromatic.description}</p></h6>
    <center><h5 class="">${aromatic.price}</h5>       
    <button class="btn btn-primary" onClick={() => dispatch({ type: "Added", product: product })}>
        Add To Cart 
        </button>
        </center>
  </div>
</div>
</div>
        
    );
};


export default Aromatic;
