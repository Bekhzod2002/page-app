import React from "react";
import Foot from "./footer/footer";
import Header from "./Header/Header";
import Home from "./MainPart/Home";
import { BrowserRouter, Route,  Routes } from "react-router-dom";
import Search from "../searchwindow/search";
import Boka from "../Boka/Boka";
import Avlop from "../Avlop/Avlop";
const Main = () => {
    return(
        <>
            <Header/>
            <Home/>
            <Foot/>
            
        </>
    )
}

export default Main;