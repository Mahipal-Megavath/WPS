import React from "react";
import './Header.css'
import {Link, useNavigate} from 'react-router-dom';
export default function Header({isLoggedIn,setLoggedIn}){

    const isLoggedIn2=localStorage.getItem("isLoggedIn")
    const navigate =useNavigate();
    console.log("is logged in 2 : ", isLoggedIn2)

    const setLogDetails = ()=> {
      localStorage.setItem('isLoggedIn',false);
      navigate('/')
    }
    console.log(isLoggedIn)
    return(
       /*<div classNameName="navbar1 fixed-top">
          <ul classNameName="navbar2" style={{marginBottom:"0px"}}>
            <li><Link to='/' >Home </Link></li>
            <li><Link to='services' > Services </Link></li>
            <li><Link to='about' > About </Link></li>
            <li classNameName="navbar3"><Link to='login' >Login </Link> </li>
          </ul>
       </div>*/
       <div>
       <header className="header-area">
       <div className="header-container">
           <div className="site-logo">
               <a href="#"><Link to='/'><span>URWork</span></Link></a>
           </div>
           <div className="mobile-nav">
               <i className="fas fa-bars"></i>
           </div>
           <div className="site-nav-menu">
               <ul className="primary-menu">
                   <li> <Link to='/'> Home</Link></li>
                   <li><Link to='about'> About </Link></li>
                   {/* <li><a href="#">Works</a></li> */}
                   
                   
                 
                  {
                    isLoggedIn2 == 'true'?<li><Link to='upload'>Upload </Link></li>:null
                  }
                   {
                    isLoggedIn2 == 'true'?<li><Link to='my_works'>MY WORKS </Link></li>:null
                  }
                  {
                    isLoggedIn2 == 'true'?<li><Link to='/chat'>Chat </Link></li>:null
                  }
                   {
                    isLoggedIn2 == 'true' ? <li><div className ="a" onClick={setLogDetails}> Logout </div></li>:<li><Link to='login'> Login </Link></li>
                  
                  }
      
               </ul>

           </div>
       </div>
   </header>
   </div>
)

    }

