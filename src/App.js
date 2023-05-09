import Header from "./components/Header";
import Registration from "./components/Registration";
import React from "react";
import Main from "./components/Main";
import Login from "./components/Login";
import Works from "./components/Works";
import My_works from "./components/MyComponents/My_works";
import Footer from "./components/Footer";
import Profile from "./components/Profile";
import Upload from "./components/Upload";
import Contact from "./components/Contact";
import Workers from "./components/MyComponents/Workers";
import Display from "./components/MyComponents/Display";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { useState } from "react";
import { Chat } from "./components/MyComponents/Chat";

function App() {
 
  const [isLoggedIn,setIsLoggedIn]=useState(false);
  const [work,setWork]=useState("");
  const [email, setEmail] = useState("");
  return (
    <>
    <BrowserRouter>
    <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='upload' element={<Upload/>}/>
        <Route path='about' element={<Profile/>}/>
        <Route path='login' element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} setEmail={setEmail}/>}/>
        <Route path='registration' element={<Registration/>}></Route>
        <Route path='mahipal' element={<Workers  setWork={setWork}/>}/>
        <Route path='/display' element={<Display work={work} />}></Route>
        <Route path='Works/:location' element={<Works/>}/>
        <Route path='my_works' element={<My_works email={email}/>}/>\
        <Route path='/chat' element={<Chat/>}/>
      </Routes>
    </BrowserRouter>
   
    {<Footer/>}
    </>
  );
}

export default App;

