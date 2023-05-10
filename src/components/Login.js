import React from 'react'
import './Login.css'
import  {useState} from "react";
import { Link, useNavigate } from 'react-router-dom';
import Axios from 'axios';
import Workers from './MyComponents/Workers';
const  Login = ({isLoggedIn,setIsLoggedIn,setEmail}) => {

    const isLoggedIn2 = localStorage.getItem("isLoggedIn")
    let navigate=useNavigate();
    console.log(isLoggedIn)
    const[fpass_popup_box,setpop]=useState(false);
    const toggle_forgot=()=>{
      setpop(!fpass_popup_box) 
    }

    const login=async (event)=>{
        event.preventDefault();
        const data=new FormData(event.target);
        const details={
            email:data.get("email"),
            password:data.get("password")
        }
        const loginStatus=await Axios.post('http://13.53.114.16:5000/login',details);
        // console.log(loginStatus)
        if(loginStatus.data.status=="success"){
            console.log(loginStatus.data.result);

            setEmail(loginStatus.data.result.email);

            localStorage.setItem('chat-app-user',JSON.stringify(loginStatus.data.result))

            localStorage.setItem('isLoggedIn',true);
            navigate('/mahipal')
            setIsLoggedIn('true');
        }
        else{
            console.log("Invalid login")
            alert("Inalid Email")
        }
       
    }



  return (
    <>
    {

        isLoggedIn2=="true" ?<Workers setIsLoggedIn={setIsLoggedIn}/> : (<section id="section-wrapper">
        <div className="box-wrapper">
            <div className="bg-box">
                {/* <img src="images/login.png" alt=""/> */}
            </div>
            <div className="form-box">
                <form action="#" method="POST" onSubmit={login}>
                    <h4 className="form-title">Login your Account</h4>
                    <div className="form-fields">
                        <div className="form-group">
                            <input type="email" className="user-email" placeholder="Your email" name="email" 
                             />
                        </div>
                        <div className="form-group">
                            <input type="password" className="user-pass" placeholder="Your Password" name="password"/>
                        </div>
                        <div className="fpass">
                            <span className="fpass-btn" onClick={toggle_forgot}>Forget Password?</span>
                        </div>
                    </div>
                    <input type="submit" value="Login" className="submit-button"/>
                </form>
                <p className="signin-here">Don't have an account ?<Link to='/registration'>Sign Up</Link></p>
            </div>
            {/* <!-- Popup box for password reset --> */}
            
        {
                fpass_popup_box &&
                <div className="fpass_popup_box">
                <div className="popup-close" onClick={toggle_forgot }>
                    <img src="#" className="close-btn" alt=""/>
                </div>
                <form  method="POST">
                    <h4 className="form-title">FORGOT PASSWORD?</h4>
                    <p className="form-sub-title">Enter your email address and we will send you a link to reset your password.</p>
                    <div className="form-fields">
                        <div className="form-group">
                            <input type="email" className="user-name" placeholder="Your email"/>
                        </div>
                    </div>
                    <input type="submit" value="Send email" className="submit-button"/>
                </form>
            </div> 
        
        }
    
        </div>
    </section>)
    }
        
    </> 
  )
}
export default Login;
