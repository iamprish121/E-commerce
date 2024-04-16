import React,{useState} from 'react'
import './Navbar.css'
import logo from '../Assests/logo.png'
import cart_icon from '../Assests/cart_icon.png'
import { Link } from 'react-router-dom'

const Navbar = () => {

    // create use state variable with initial state shop//
    const [menu,setMenu] = useState("Shop")

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>SHOPPERS STOP</p>
      </div>
      <ul className="nav-menu">
        <li onClick={()=>{setMenu("Shop")}}><Link style={{textDecoration:'none',color:'black'}} to='/'>Shop</Link>{menu==="Shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Men")}}><Link style={{textDecoration:'none',color:'black'}} to='/mens'>Men</Link>{menu==="Men"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Women")}}><Link style={{textDecoration:'none',color:'black'}} to='/womens'>Women</Link>{menu==="Women"?<hr/>:<></>} </li>
        <li onClick={()=>{setMenu("Kids")}}><Link  style={{textDecoration:'none',color:'black'}}to='/kids'>Kids</Link> {menu==="Kids"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Gift Ideas")}}>Gift Ideas {menu==="Gift Ideas"?<hr/>:<></>}</li>
       
      </ul>
      <div className="nav-login-cart">
        <Link to='/login'><button>login</button></Link>
        <Link to='/cart'><img src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  )
}

export default Navbar
