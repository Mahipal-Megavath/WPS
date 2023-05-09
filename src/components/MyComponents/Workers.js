import React from "react";
import "./WorkerStyle.css";
import { useState } from "react";
import { Link } from 'react-router-dom'
// import carpenter from "../assets/carpenter.jpg"
// import electrician from "../assets/Electrician.jpeg"
// import plumbing from "../assets/plumber.jpg"
// import cleaning from "../assets/cleaning.jpg"
// import painting from "../assets/painting.jpg"     
// import salon from "../assets/Salon2.jpeg"
import { useNavigate } from "react-router-dom";
import { useStateContext } from "../../ContextProvider";
const works = ['carpenter', 'electrician', 'plumbing', 'cleaning', 'painting', 'salon']
const Workers = ({ setWork }) => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.setItem("isLoggedIn",JSON.stringify(false))
    navigate('/login')
  }

  // require("./carpenter.jpg")


  const {location1, setlocation} = useStateContext()
  const changeHandler = (e) => {
    setlocation({ [e.target.name]: `/Works/${e.target.value}` })
  }
  let location = location1;
  console.log(location);
  return (
    <>
      <form>
        <div className="topnav">
          <Link to={location1.location}>submit </Link>
          <input type="text" name="location" placeholder="Search by location...."
            onChange={changeHandler} />
        </div>
      </form>
      <div className="body-container">

        <div className="container">
          {works.map((work) => {
            return (
              <div key={work} className="workerStyle" onClick={() => { setWork(work); navigate('/display') }}>
                <img src={require(`../assets/${work}.jpg`)} alt={work} />
                <p>{work}</p>
              </div>
            );
          })}
          {/* <div className="workerStyle" onClick={()=>navigate(`/carpenter`)}>
        <img src={carpenter} alt="carpenter" />
        <p>Carpenting</p>
      </div>
      <div className="workerStyle">
        <img src={electrician} alt="electrician" />
        <p>Electric</p>
      </div>
      <div className="workerStyle" onClick={()=>navigate(`/plumbing`)}>
        <img src={plumbing} alt="plumbing" />
        <p>Plumbing</p>
      </div>
      <div className="workerStyle">
        <img src={cleaning} alt="cleaning" />
        <p>Cleaning</p>
      </div>
      <div className="workerStyle">
        <img src={painting} alt="painting" />
        <p>Painting</p>
      </div>
      <div className="workerStyle">
        <img src={salon} alt="Salon" />
        <p>Salon</p>
      </div> */}
        </div>
      </div>
    </>
  );
};

export default Workers;
