import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'
import { ThemeContext } from '../Context/ThemeContext'
import Wishlist from './Wishlist'

const Navbar = () => {
    const hello ={
        border:'1px solid black',
        height:"45px" ,
        display:'flex',
        alignItems:"center" , justifyContent:"space-between"}

const {isAuth,login,logout}=useContext(AuthContext)
const {isLight,toggleTheme}=useContext(ThemeContext)

  return (
   <>
   <div style={hello}>Navbar....

      <button onClick={toggleTheme}>{`Make ${isLight?"Dark":"Light"}`}</button> 
      <button onClick={()=>{!isAuth?login("r","d"):logout()}}>{isAuth?"Logout":"Login"}</button>
   </div>
   { isAuth &&
       <Wishlist/>}
   </>
  )
}

export default Navbar