import React, {useState, useEffect, Fragment} from "react";
import AOS from "aos";
import svg from '../../Images/Polygon 3.svg'
import Screen from '../../Images/Screen.png'
import Group from '../../Images/Group 1500.png' ;
import Portrait from '../../Images/Portrait.png';
import Digital from '../../Images/Digital.png';
import infobtn from '../../Images/infobtn.png';
import calendar from '../../Images/calendar.png';
import moneybtn from '../../Images/moneybtn.png';
import Ellipse1 from '../../Images/Ellipse1.png';
import Ellipse2 from '../../Images/Ellipse2.png';
import SimpleSlider from "./Slider/Slider";
import Footer from '../Main/footer/footer'


import {FaCheck} from 'react-icons/fa';
import CountUp from 'react-countup'
import ReactVisibilitySensor from "react-visibility-sensor";


const Main = () => {
    const [viewPortEntered, setViewPortEntered] = useState(false);
	useEffect(() => {
		AOS.init({ duration: 2000 });
	}, []);

    return(
        <>
            

            <section>
            <div className="Head_landing">
                        <div className="comments">
                            <p className="main_comment">
                                
                                Över
                            <Fragment>
                                <strong data-number=" 50000 ">
                                    <CountUp start={viewPortEntered ? null : 0} end={ 50000 }>
                                    {({ countUpRef }) => {
                                        return(
                                            <ReactVisibilitySensor
                                            active={!viewPortEntered}
											onChange={isVisible => {
												if (isVisible) {
													setViewPortEntered(true);
												}
											}}
											delayedCall>
												
											<span className="number" ref={countUpRef}></span>    
                                        </ReactVisibilitySensor>      
                                        )
                                    }
                                }
                    
                                    </CountUp>
                                </strong>
                            </Fragment>
                              protokoll från Sveriges kommuner samlade <br/> i en enda sökbar databas!</p>
                            <p className="second_comment">Ta reda på hur andra kommuner gjort i liknande frågor som de du själv sitter med!</p>

                            <button className="demo_btn" >Boka Demo</button>
                        </div>
                        <div className="landing_img">
                            <img src={svg}/>
                        </div>

                    </div>

            

<div className="main_content">

    

    <div className="screens">

        <h4 className="screenhead">Se hur det funkar</h4>

        <img className="screen_image" src={Screen}/>
        <div className="screen_foot">

            <img className="screens_img1"></img>
            <img className="screens_img2"></img>
            <img className="screens_img3"></img>
            <img className="screens_img4"></img>
            <img className="screens_img5"></img>

        </div>
    </div>


    <div className="Teamwork">
        <div>
            <img src={Group} /> 
        </div>
        <div className="text">
            <h4 className="cooperation">Skapa samsyn och samarbete</h4>
            <p className="Create_txt">Vi förenklar för kommuner och offentlig
             sektor att skapa samsyn mellan <br/> varandra genom att på ett väldigt
              enkelt och smidigt vis tillhandahålla <br/> dokument i en enda sökbar
               databas. Gör en sökning och se hur andra liknande <br/> kommuner gjort
                i en liknande fråga som din. Genom att tillhandahålla den här <br/>
                 informationen på ett enkelt sätt är vår förhoppning att allt fler
                  kommuner ska <br/> slippa uppfinna hjulet gång på gång och istället ta
                   rygg på varandra och öka det <br/> kommunala samarbetet mellan kommuner.
                   Tänk på möjligheterna som skapas!</p>

            <p className="easy"><FaCheck/>Enkelt och smidigt</p>      
            <p className="public"><FaCheck/>Offentlig sektor att skapa samsyn</p>      
            <p className="avoid"><FaCheck/>Slippa uppfinna hjulet gång på gång</p>      

        </div>
    </div>

    <div className="let_downpart">
        <div className="letdowns">
            <div className="benefits_txt">
                <h5 className="benefits_head">Underlätta din <br/> omvärldsbevakning</h5>
                <p className="maintxt">

                   Istället för att du ska behöva ringa runt
                   till kommuner på måfå eller sålla <br/> bland
                   tusentals träffar på Google, så har vi
                   skapat en sökbar databas som <br/> endast är
                   uppbyggd av de dokument du faktiskt kan 
                   vara intresserad utav i <br/> sammanhanget. Allt 
                   för att underlätta din omvärldsbevakning 
                   och spara på <br/> din tid. När du väl får en träff
                   som är intressant för just dig så har du nu <br/>
                   tillgång till ett diarienummer och vet exakt
                   vem du ska vända dig till för att <br/> veta mer. 
                   Tänk på timmarna som sparas! 

                </p> 
                <div className="protocols" >
                    <ul>
                        <i className="numbers">+
                            <Fragment>
                                <strong data-number="50000">
                                    <CountUp start={viewPortEntered ? null : 0} end={50000}>
                                        {({ countUpRef }) => {
                                            return (
                                                <ReactVisibilitySensor
                                                    active={!viewPortEntered}
                                                    onChange={isVisible => {
                                                        if (isVisible) {
                                                            setViewPortEntered(true);
                                                        }
                                                    }}
                                                    delayedCall>
                                                        
                                                    <span className="number" ref={countUpRef}></span>
                                                </ReactVisibilitySensor>
                                            );
                                        }}
                                    </CountUp>
                                </strong>
                            </Fragment>
                        </i>
                        <p className="numb_txt">Protokoll i samma plats</p>
                    </ul>
                    <hr/>
                    <ul>
                        <i className="numbers">+
                            <Fragment>
                                <strong data-number="30000">
                                    <CountUp start={viewPortEntered ? null : 0} end={30000}>
                                        {({ countUpRef }) => {
                                            return (
                                                <ReactVisibilitySensor
                                                    active={!viewPortEntered}
                                                    onChange={isVisible => {
                                                        if (isVisible) {
                                                            setViewPortEntered(true);
                                                        }
                                                    }}
                                                    delayedCall>
                                                        
                                                    <span className="number" ref={countUpRef}></span>
                                                </ReactVisibilitySensor>
                                            );
                                        }}
                                    </CountUp>
                                </strong>
                            </Fragment>
                        </i>
                        <p className="numb_txt">Ned laddade protokoll</p>
                    </ul>
                    <hr/>
                    <ul>
                        <i className="numbers">+
                            <Fragment>
                                <strong data-number="10000">
                                    <CountUp start={viewPortEntered ? null : 0} end={10000}>
                                        {({ countUpRef }) => {
                                            return (
                                                <ReactVisibilitySensor
                                                    active={!viewPortEntered}
                                                    onChange={isVisible => {
                                                        if (isVisible) {
                                                            setViewPortEntered(true);
                                                        }
                                                    }}
                                                    delayedCall>
                                                        
                                                    <span className="number" ref={countUpRef}></span>
                                                </ReactVisibilitySensor>
                                            );
                                        }}
                                    </CountUp>
                                </strong>
                            </Fragment>
                        </i>
                        <p className="numb_txt">Sparade timmar</p>
                    </ul>
                </div>

            </div>
            <div className="portrait">
                <img className="portrait_img" src={Portrait} />
            </div>
        </div>
    </div>

    <div className="Digital_part">

        <div className="Digital">

            <div>

                <img src={Digital}/>

            </div>
            <div className="digital_txt">

                <p className="digital_head">Digitalt och hållbart</p>
                
                <p className="digital_comment">

                    Digitaliseringsarbetet pågår för fullt 
                    runtom i Sveriges kommuner och <br/> myndigheter. 
                    Vad passar då bättre än en helt onlinebaserad 
                    sökmotor som på <br/> ett effektivt sätt underlättar 
                    flera aspekter i det offentliga arbetet? Att 
                    samtidigt <br/> skapa samsyn och samarbete och därmed 
                    enklare uppnå gemensamt <br/> uppställda mål tillsammans 
                    tycker vi dessutom känns väldigt hållbart!

                </p>

                <p className="digital_tank">Tänk på framtiden!</p>

                <p className="tank_txt">

                    Digitaliseringsarbetet pågår 
                    för fullt runtom i Sveriges 
                    kommuner och <br/> myndigheter. Vad 
                    passar då bättre än en helt onlinebaserad

                </p>

                <p className="Nar">När du vill och var du vill</p>

                <p className="Nar_txt">

                    Digitaliseringsarbetet pågår för 
                    fullt runtom i Sveriges <br/> kommuner 
                    och myndigheter. Vad passar då bättre än.
                    
                </p>

            </div>

        </div>

    </div>

    <div className="opportunity_part">

        <div className="opportunity">

            <h4 className="opportunity_head">Intresserad av vår sökmotor? <br/> Så här går du tillväga</h4>

            <div className="yourway">

                <div className="kolla_part">
                    
                    <div className="kolla_img">

                        <img src={infobtn}/>

                    </div>    

                    <p className="kolla">Kolla runt på hemsidan </p>

                    <p className="kollatxt">

                        Kolla runt på hemsidan och läs vår
                        "Frågor och <br/> svar"-sektion för att 
                        förstå vad det här är för slags <br/> tjänst 
                        och om den passar just dig och din <br/> verksamhet.

                    </p>

                </div>

                 <img className="ellips_img1" src={Ellipse1}/> 
                
                <div>

                    <div className="boka_img">

                        <img src={calendar}></img>

                    </div>

                    <p className="boka_head">boka in tid</p>

                    <p className="boka_txt">
                        
                        Använd vår online kalender för att boka
                        in ett <br/> demosamtal där vi kan berätta mer 
                        om hur tjänsten <br/> fungerar – <a href="#">Klicka här för att boka ett demosamtal</a>.
                    
                    </p>

                </div>

                <img className="ellips_img2" src={Ellipse2}/> 

                <div>

                    <div className="money_img">

                        <img src={moneybtn}></img>
                        
                    </div>

                    <p className="under">Under demosamtalet</p>

                    <p className="under_txt">

                        Under demosamtalet visar vi tjänsten och dess funktioner. 
                        Vi berättar om våra upplägg och lämnar en offert med prisförsl - 
                        
                        <a href="#">Klicka här för att boka ett demosamtal</a>.

                    </p>

                </div>

            </div>
        </div>

    </div>

    <div className="municipial_part">

        <div className="municipial">
            
            <h5 className="Allt_head">Allt fler kommuner och myndigheter använder <br/> och uppskattar vår sökmotor. Se själv.</h5>
            <>
                <SimpleSlider/>
            </>

        </div>

    </div>

    <Footer/>

</div>




</section>





        </>    
    )
}

export default Main;