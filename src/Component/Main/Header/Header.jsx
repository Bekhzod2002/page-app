import React from "react";
import Logo from '../../../Images/Logo.png';
import svg from '../../../Images/Polygon 3.svg';
import {FaSistrix, } from 'react-icons/fa';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';
import './header.css'
import Search from "../../searchwindow/search";

const Header = () => {


    return(
        
        <header>
           
            <div className="container">

                <div className="flexSB">
                    <div className="navbar">
                        <div className="logo">
                            <img src={Logo}/>
                        </div>
                        

                        <ul className="navMenulist">
                            <a>Hem</a>
                            <a>Sökguide</a>
                            <a>Kontakt oss</a>

                                
                            <button className="search_btn" ><FaSistrix/> Sökmotor   </button>
                        

                        </ul>


                        <AiOutlineMenu className="mobile_btn"/>

                    </div>



 

         




                    
                    <div className="Head_landing">
                        <div className="comments">
                            <p className="main_comment">Över 50.000 protokoll från Sveriges kommuner samlade <br/> i en enda sökbar databas!</p>
                            <p className="second_comment">Ta reda på hur andra kommuner gjort i liknande frågor som de du själv sitter med!</p>

                            <button className="demo_btn">Boka Demo</button>
                        </div>
                        <div className="landing_img">
                            <img id="hexagon" src={svg}/>
                        </div>
                    </div>
                </div>

                
            </div>

        </header>
        
    )
}

export default Header;