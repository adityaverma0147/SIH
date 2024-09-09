import React, {useState } from 'react'
import './Navbar.css' 
import myaccount from '../../myaccount.png';
import { Link } from 'react-router-dom'



export const Navbar = () => {
    const [menu,setMenu] = useState("home");

  
  return (
    <div className='navbar'>
        <div onClick={() =>{setMenu("home")}}><Link style={{ textDecoration: 'none'}}to='/'className="nav-logo">
            {/* <img src={logo } alt="" /> */}
            <p>KRISHI SAATHI</p>
            </Link>{menu==="home"? '':<></>}</div>
        <ul className="nav-menu">
            <li onClick={() =>{setMenu("home")}}><Link style={{ textDecoration: 'none'}}to='/home'>HOME</Link>{menu==="home"?<hr/>:<></>}</li>
            <li onClick={() =>{setMenu("dashboard")}}><Link style={{ textDecoration: 'none'}}to='/dashboard'>DASHBOARD</Link>{menu==="dashboard"?<hr/>:<></>}</li>
            <li onClick={() =>{setMenu("soilreport")}}><Link style={{ textDecoration: 'none'}}to='/soilreport'>SOIL-TESTING</Link>{menu==="soilreport"?<hr/>:<></>}</li>
            <li onClick={() =>{setMenu("dronebooking")}}><Link style={{ textDecoration: 'none'}} to='/dronebooking'>DRONE-BOOKING</Link>{menu==="dronebooking"?<hr/>:<></>}</li>
        </ul> 
        
        {/* <div className="nav-login-cart"> 
         */}

            <Link to='/login' className="profile-link">
        <button>
          <img className="profile-img" src={myaccount} alt="Profile" />
        </button>
      </Link>
        {/* </div> */}
    </div> 
  )
}
