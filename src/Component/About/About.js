import React from "react";
import About_img from '../../Images/About_img.png';
import infobtn from '../../Images/infobtn.png';
import calendar from '../../Images/calendar.png';
import moneybtn from  '../../Images/moneybtn.png';
import Ellipse1 from '../../Images/Ellipse1.png';
import Ellipse2 from '../../Images/Ellipse2.png';
import { FaCheck } from "react-icons/fa";
import './About.css'
import Footer from "../Main/footer/footer";

const About = () => {
    return (
        <>

            <div className="about_part">
                <h5 className="abouthead">Hur vi hjälper kommuner att effektivisera <br/> sitt arbete och öka samsynen i <br/> beslutsfattandet</h5>
                <div className="aboutcontent">
                    <img className="aboutimg" src={About_img}/>
                    <ul>
                        <p className="free_info">På ett gratis demosamtal får du reda på:</p>
                        <p className="free"> <FaCheck/> Hur sökmotorn fungerar</p>
                        <p className="free"> <FaCheck/> Hur våra avtalsupplägg ser ut</p>
                        <p className="free"> <FaCheck/> Vad priset för att ha tillgång till sökmotorn är</p>
                        <p className="free"> <FaCheck/> Vad som behövs för att komma igång</p>
                        <button className="aboutpart_btn">Boka ditt demo samtal här!</button>
                    </ul>
                </div>
            </div>
            <div className="results_searchpart">
                <h5 className="tillvaga">Intresserad av vår sökmotor? <br/> Så här går du tillväga</h5>
                <div className="resultsearch">
                    <div className="_info_part_">
                        <div className="_info_">
                            <img src={infobtn} />
                        </div>
                        <div className="infoimghead">Kolla runt på hemsidan </div>
                        <p>
                            Kolla runt på hemsidan och läs vår
                            "Frågor och <br/> svar"-sektion för att 
                            förstå vad det här är för slags <br/> tjänst 
                            och om den passar just dig och din <br/> verksamhet.
                        </p>
                    </div>
                    <img className="ell1" src={Ellipse1}  />
                    <div>
                        <div className="_calendar_">
                            <img src={calendar}/>
                        </div>
                        <div className="calendarimghead">boka in tid</div>
                        <p>
                            Använd vår online kalender
                            för att boka in ett <br/> demosamtal 
                            där vi kan berätta mer om hur tjänsten
                            <br/> fungerar – <a href="#">Klicka här 
                            för att boka ett demosamtal</a>.
                        </p>
                    </div>
                    <img className="ell2" src={Ellipse2}/>
                    <div>
                        <div className="_money_">
                            <img src={moneybtn}/>
                        </div>
                        <div className="moneyimghead">Under demosamtalet</div>
                        <p>                        
                            Under demosamtalet visar vi tjänsten och dess <br/> funktioner. 
                            Vi berättar om våra upplägg och lämnar <br/> en offert med prisförsl - 
                        
                        <a href="#">Klicka här för att boka ett <br/> demosamtal</a>.</p>
                    </div>
                    
                </div>
                <Footer/>
            </div>
        </>
    )
}

export default About;