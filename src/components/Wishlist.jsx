import React, { useContext } from 'react'
import { CartContext } from '../Context/CartContext';


const Wishlist = () => {
    const {count,setCount} = useContext(CartContext);
  return (
    <div>
      
       <div> count:{count}</div>
        <button onClick={()=>{setCount(count+1)}}>Add to Cart</button></div>
  )
}

export default Wishlist