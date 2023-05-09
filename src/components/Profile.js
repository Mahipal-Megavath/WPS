import React from "react";
import './Profile.css'
import shammu from './shammu.jpeg';
import vikas from './vikas.jpg';
import mahipal from './mahipal.jpeg';
export default function Profile(){
    return(
        <>
        
        <br></br>
           <div class="card">
          <img src={vikas} alt="John" style={{width:"100%"}}/>
          <h1>Vikas </h1>
          <p class="title">Full Stack Developer</p>
          <p>Basar</p>
        </div>
        <br></br>
        <div class="card">
          <img src={shammu} alt="John" style={{width:"100%" ,height:"20%"}}/>
          <h1>Shammu</h1>
          <p class="title">Front End Developer</p>
          <p>Basar</p>
         
        </div>
        <br></br>
        <div class="card">
          <img src={mahipal} alt="John" style={{width:"100%"}}/>
          <h1>Mahi</h1>
          <p class="title">Software Developer</p>
          <p>Basar</p>
         
        </div>
        <br></br>
        </>
    )
}