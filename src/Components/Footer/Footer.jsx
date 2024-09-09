import React from 'react'
import './Footer.css'

// import { Link } from 'react-router-dom'
export const Footer = () => {
    // const [menu,setMenu] = useState("shop");
  return (
    <div className='footer'>
        {/* <div onClick={() =>{setMenu("shop")}}><Link style={{ textDecoration: 'none'}}to='/'className="footer-logo">
            <img src={'footer_logo' } alt="" />
            <p>SHOPPER</p>
            </Link>{menu==="shop"? '':<></>}</div> */}
            {/* <ul className="footer-links">
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul> */}
            {/* <div className="footer-social-icon ">
                <div className="footer-icons-container">
                    <img src={'instagram_icon'} alt="" />
                </div>
                <div className="footer-icons-container">
                    <img src={'pintester_icon'} alt="" />
                </div>
                <div className="footer-icons-container">
                    <img src={'whatsapp_icon'} alt="" />
                </div>
            </div>  */}
            <div className="footer-copyright">
                {/* <hr /> */}
                <p>Copyright @ 2024 - All Rights Reserved.</p>
            </div>  
    </div>
  )
}
