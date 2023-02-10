import React, { Fragment, useState, useEffect } from "react";
import CountUp from 'react-countup'
import Logo from '../../../Images/Logo.png';
import svg from '../../../Images/Polygon 3.svg';
import {FaSistrix, } from 'react-icons/fa';
import './header.css'
import Modal from "../searchwindow/search";
import Boka from "../../About/About";
import {Link, Navigate, Route, Routes } from "react-router-dom";
import ReactVisibilitySensor from "react-visibility-sensor";
import AOS from "aos";


const Header = () => {
    const [modalActive, setModalActive] = useState(false)
    const [viewPortEntered, setViewPortEntered] = useState(false);
	useEffect(() => {
		AOS.init({ duration: 2000 });
	}, []);



    
    return(

        <>
            <header>
            
            <div>

                <div className="flexSB">
                    <div className="navbar">
                        <div className="logo">
                            <img src={Logo}/>
                        </div>
                        

                        <ul className="navMenulist">
                            <Link to={"/"}>Hem</Link>
                            <Link to={"/Boka"}>Sökguide</Link>
                            <Link to={"/Avlop"}>Kontakt oss</Link>     
                        <button className="search_btn" onClick={() => setModalActive(true)}><FaSistrix/> Sökmotor   </button>


                        </ul>



                    <Modal active={modalActive} setActive={setModalActive}/>

                    </div>



                </div>


                
            </div>



            </header>

            <Routes>
                <Route path="/Boka" element={<Boka/>}/>
            </Routes>

        </>
        
    )
}

export default Header;