import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'
import Product from './Product'

const Products = () => {
    const {isAuth} = useContext(AuthContext)
  return (
      <>
      
          {isAuth?<div><h1>User is Now Login</h1><p> Now he can Add Products to  the Cart</p></div>:<h1>User is Now Logout</h1>}
      
    <Product/>
    </>
  )
}

export default Products