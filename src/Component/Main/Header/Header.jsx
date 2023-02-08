import React, { useState } from "react";
import Logo from '../../../Images/Logo.png';
import svg from '../../../Images/Polygon 3.svg';
import {FaSistrix, } from 'react-icons/fa';
import './header.css'
import Modal from "../searchwindow/search";
import Boka from "../../Boka/Boka";
import { Link, Route, Routes } from "react-router-dom";


const Header = () => {
    const [modalActive, setModalActive] = useState(false)
    
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
                            <a>Hem</a>
                            <a>Sökguide</a>
                            <a>Kontakt oss</a>

                            <button className="search_btn" onClick={() => setModalActive(true)}><FaSistrix/> Sökmotor   </button>
                        

                        </ul>

                    <Modal active={modalActive} setActive={setModalActive}/>

                    </div>
                    <div className="Head_landing">
                        <div className="comments">
                            <p className="main_comment">Över 50.000 protokoll från Sveriges kommuner samlade <br/> i en enda sökbar databas!</p>
                            <p className="second_comment">Ta reda på hur andra kommuner gjort i liknande frågor som de du själv sitter med!</p>

                            <Link to="/Boka" className="demo_btn"  ><span>Boka Demo</span></Link>
                        </div>
                        <div className="landing_img">
                            <img src={svg}/>
                        </div>

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