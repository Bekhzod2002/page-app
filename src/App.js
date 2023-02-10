import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Component/About/About";
import React from "react";
import Avlop from "./Component/Avlop/Avlop";
import Main from "./Component/Main/Main";
import Header from "./Component/Main/Header/Header";



function App() {


  return (

    <>
    <BrowserRouter>
    <Header/>


            <Routes>
          

            <Route path="/" element={<Main/>}/>
            <Route path="/About" element={<About/>}/>
            <Route path="/Avlop" element={<Avlop/>}/>
          </Routes>

    </BrowserRouter>

            
    </>
  );
}

export default App;
