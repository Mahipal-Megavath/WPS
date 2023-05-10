import React from "react";
import './My_works.css'
import axios from "axios";
import { useState ,useEffect } from 'react';
import { useNavigate } from "react-router-dom";
const My_works =()=>{

   let email = JSON.parse(localStorage.getItem("chat-app-user")).email;
   const [data, setdata] = useState([]);
   const navigate = useNavigate();
   console.log("email" , email);
   useEffect(() =>{
    const  fetch = async() => {
      await axios.get('http://13.53.114.16:5000/works').then(res => {
        console.log(res.data)
        setdata(res.data)
      })
    }
    fetch();
  }, [])

  const deleteWork = async (works) =>{
    console.log("function is calling")
    await axios.post('http://13.53.114.16:5000/delete',works).then(res => {
      console.log(res.data)
    })
    alert("Delete Success")
    navigate('/')
  }
    
  const [filterworks, setFilterWorks] = useState([]);
  useEffect(()=>{
    setFilterWorks(data.filter(work => work.email === email))
  },[data])
  console.log(filterworks)
    return(
        <>         
              {/*<div class="my_works">
                    <form>
                    <input type="button" class="button"  id="button" value="Enter"/>
                    <input type="text"  class="button" id="fname" name="email" placeholder="Enter Email"
                    onChange={changeHandler}
                    />  
                    </form>
               </div>
    */}
               

                  

                {
        filterworks.map(works =>
           
            <div class="container">
            <div class="card">
            <div class="face face1">
                <div class="content">
                <h3>{works.workstype}</h3>
                
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                <p>{works.email}</p>
                <p></p>
                <p>{works.state}</p>
                <p>{works.mobilenum}</p>
                <button onClick={()=>deleteWork(works)} >Delete Work</button>
                </div>
            </div>
            </div>
        </div>
        )}
        

        </>
    )

}
export default My_works