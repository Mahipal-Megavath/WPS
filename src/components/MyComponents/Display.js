import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {picks} from './ImageArray'
import './Display.css'
// import bar from "../assets/cleaning.jpg"
const Display = ({work}) => {
  // const params = useParams()
  // params.work ==> which tells what type of work to display
  const [arr, setArr] = useState([]);
  console.log(arr)
  useEffect(()=>{
    setArr(picks.filter( function (workObject){
              return workObject.profession === work;
              }
    
            ))
  },[])
  return (
    <>  
    <div className='container'>
      
      
       {
        arr.length != 0?arr.map((obj)=>{
          return(
              
              <div key ={obj.id} className='dis'>
                <img src={obj.workPick} alt="" className='pick'/>
                <div className='text'>
                  <h4>{obj.statement}</h4>
                  <p><span>name:</span> {obj.name}</p>
                  <p><span>phone no:</span> {obj.contact}</p>
                  <p><span>email :</span> {obj.email}</p>
                  <p><span>address:</span> {obj.address}</p>
                </div>
              </div>
          )
        }

        ):""
       }
       </div>
    </>
  )
}

export default Display
