import React, { useState, useEffect } from "react";
import './Works.css'
import axios from "axios";
import { useStateContext } from "../ContextProvider";
import { useParams } from "react-router-dom";
const Works = () => {


  const [data, setdata] = useState([]);
  const {location} = useParams();
  console.log(location)

  
  useEffect(() =>{
    const  fetch = async() => {
      await axios.get('http://localhost:5000/works').then(res => {
        console.log(res.data)
        setdata(res.data)
      })
    }
    fetch();
  }, [])


  const [filterworks, setFilterWorks] = useState([]);
  useEffect(()=>{
    setFilterWorks(data.filter(work => work.state.toLowerCase() === location.toLowerCase() || work.district.toLowerCase()===location.toLowerCase() || work.village.toLowerCase()===location.toLowerCase() ||  work.workstype.toLowerCase()===location.toLowerCase()))
  },[data])
  console.log(filterworks)
  return (
    <>

      {
        filterworks.map(works =>

          <div><br></br>

          <div class="card">
        
          <h6>{works.email}</h6>
          <p class="title">{works.workstype}</p>
          <p>{works.email}</p>
          <p>{works.mobilenum}</p>
          <p>{works.country}</p>
          <p>{works.state}</p>
          <p>{works.village}</p>
          
        </div>
        <br></br>
        <br></br>
        </div>
        )}
     


    </>
  )
}

export default Works
