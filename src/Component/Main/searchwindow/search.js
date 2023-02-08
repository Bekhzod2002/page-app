import React, { useState } from 'react';
import {FaPhoneAlt, FaHome, FaRegClock, FaInstagram, FaTelegram, FaFacebookSquare} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import './search.css';
import Logo from '../../../Images/Logo.png';


const Modal = ({active, setActive, children}) => {
    
    const [selected, setSelected] = useState(null)
    const modaltoggle = (i) => {
        if(selected === i) {
            return setSelected(null)
        }
        setSelected(i)
    }
    
    return(
        <div className={active? 'modal active' : 'modal'} onClick={() => setActive(false)}>
            <div className="modal__content"  onClick={e => e.stopPropagation} >
                {children}

                <div className='modal_head'>
                    <div className="modal_navbar">
                        <div className="modal_logo">
                            <img src={Logo}/>
                        </div>
                        

                        <ul className="modal_navMenulist">

                            <a>Hem</a>
                            <a>Sökguide</a>
                            <a>Priser</a>
                            <a>Om oss</a>
                            <a>Kontakt </a>                        

                        </ul>

                        <button className="modal_login"> Logga in</button>

                    </div>
                    <div className='search_part'>
                        <div>
                            <h5 className='contact_us'>Hör av dig</h5>
                            <p className='contact_txt'>Söker du efter en byggfirma som kan hjälpa dig med köksrenovering i <br/> Stockholm? Då är vi den rätta firman för dig!</p>

                            <div className='modal_name'>
                                <input className='name_input' type={Text} placeholder="Namn"></input>
                                <input className='firstname_input' type={Text} placeholder="Efternamn"></input>
                            </div>
                            <div className='modal_epost'>
                                <input className='e-post_input' type={Text} placeholder="e-post"></input>
                                <input className='phonenumber_input' type={Text} placeholder="Telefonnumber"></input>
                            </div>
                            <div className='modal_message'>
                                <label>Meddelande</label>
                                <input className='message_input' type={Text}></input>

                                
                            </div>




                        </div>

                        <div>
                            <ul className='adress'>
                                <FaHome className='home'/>
                                <ul>
                                    <p className='adress_head'>Adress</p>
                                    <p className='adresstxt'>SMÅLANDSVÄGEN 00 F LGH 1111 <br/> Mjölby</p>
                                </ul>

                            </ul>
                            <ul  className='phone_us'>
                                <FaPhoneAlt className='phone'/>
                                <ul>
                                    <p className='phone_head'> Telefon</p>
                                    <p className='phonetxt'>0760-609500, 0760-594300</p>
                                </ul>

                            </ul>
                            <ul className='dataicon'>
                                <FaRegClock className='clock'/>
                                <ul>
                                    <p className='clock_head'>Öppettider</p>
                                    <p className='clocktxt'>Mån-Fre: 10-18 <br/> Lör: 11-15</p>
                                </ul>

                            </ul>
                            <ul>
                                <p className='folja'>Folja oss</p>
                                <p className='socialnetworks'>
                                    <FaInstagram className='insta'/>
                                    <FaTelegram className='tg'/>
                                    <FaFacebookSquare className='facebook'/>
                                </p>
                            </ul>
                        </div>
                    </div>
                </div>


                <div>
                    
                    <div>
                        <div className='modalwrap'>

                        
                            <h5 className='modalfragor'>Frågor och svar</h5>
                            <div className='modalaccordion'>
                                {modaldata.map((item, i ) =>  (
                                    <div className='modalitem'>
                                        <div className='modaltitle' onClick={() => modaltoggle(i)}>
                                            <h3>{item.question}</h3>   
                                            <span>{selected === i ? '-' : '+'}</span> 
                                        </div> 
                                        <div className={selected === i ? 'modalcontent show' : 'content'}>{item.answer}</div>

                                    </div>
                                ))

                                }
                            </div>   



                        </div>
            
                        <div className='modalblack_part'>
                                <p>Copyright © 2022 Maxplatt.se Org 550964-4584 Onic webbyrå</p>
                                <div className='modalblacktxt'>
                                    <p>Integritetspolicy</p>
                                    <p>Allmänna villkor</p>
                                </div>
                            </div>
                    
                    </div>

                </div>


      
            </div>

        </div>
    )
}

const modaldata = [
    {
        question: 'Vilket är det bästa materialet för miljön?',
        answer: 'Återvunna textilier är generellt sett ett bättre miljömässigt val då det tar vara på befintliga resurser och minskar mängden avfall. Vi på H&M jobbar med flera typer av återvunna material, såsom återvunnen bomull, polyester, nylon, ull, plast och silver.'
    },
    {
        question: 'Hur bygger man ett miljövänligt hus?',
        answer: 'Återvunna textilier är generellt sett ett bättre miljömässigt val då det tar vara på befintliga resurser och minskar mängden avfall. Vi på H&M jobbar med flera typer av återvunna material, såsom återvunnen bomull, polyester, nylon, ull, plast och silver.'

    },
    {
        question: 'Vad är kvalitet i byggnationen?',
        answer: 'Återvunna textilier är generellt sett ett bättre miljömässigt val då det tar vara på befintliga resurser och minskar mängden avfall. Vi på H&M jobbar med flera typer av återvunna material, såsom återvunnen bomull, polyester, nylon, ull, plast och silver.'

    },
    {
        question: '7 tips för snabbare, säkrare och billigare byggprojekt',
        answer: 'Återvunna textilier är generellt sett ett bättre miljömässigt val då det tar vara på befintliga resurser och minskar mängden avfall. Vi på H&M jobbar med flera typer av återvunna material, såsom återvunnen bomull, polyester, nylon, ull, plast och silver.'


    }
]

export default Modal;