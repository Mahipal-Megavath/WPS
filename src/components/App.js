
import './App.css';

import Workers from "./MyComponents/Workers"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Display from './MyComponents/Display';
import Footer from './MyComponents/Footer';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Workers/>}/>
        <Route path='/:work' element= {<Display/>}/>
      </Routes>
    </BrowserRouter>
    
  
  );
}

export default App;
