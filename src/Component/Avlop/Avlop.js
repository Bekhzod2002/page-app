import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import search from '../../Images/search.png';
import Filterimg from '../../Images/Filterimg.png';
import Company_img from '../../Images/Company_img.png';
import home from '../../Images/home.png';
import ep_place from '../../Images/ep_place.png';
import law from '../../Images/law.png';
import book from '../../Images/book.png';
import download from '../../Images/download.png';
import clock_img from '../../Images/clock_img.png';
import Pdf from '../../Images/Pdf.png';
import Word from '../../Images/Word.png';
import Portrait from '../../Images/Portrait.png';
import Digital from '../../Images/Digital.png';
import './Avlop.css'
import Footer from "../Main/footer/footer";



const Avlop = () => {

    
  const data = {
  
  
    CardData:[
                  {
                      id: 1,
                      img: Company_img,
                      title: 'Krav på enskilda avlopp', 
                      clock: clock_img,
                      clocktitle: '2022-02-21',
                      Home: home, 
                      hometitle: 'Västra götaland',
                      place: ep_place,
                      placetitle: 'Göteborg', 
                      Lawimg: law, 
                      lawtitle: 'Tingsrätt', 
                      text: 'Det är du som rår över din avloppsrening som ansvarar för att utsläppet inte orsakar olägenhet för varken människors hälsa eller miljön. Myndighetens krav ska anpassas utifrån de risker ditt avloppsutsläpp kan innebära. Varje ärende ska prövas var för sig.', 
                      pdf: Pdf,
                      pdftitle: '14mb', 
                      word: Word, 
                      wordtitle: '14 Sidor', 
                      buk: book, 
                      buktitle: 'Öppna', 
                      download: download, 
                      downloadtitle: 'Ladda Ner'
                  },
                  {
                      id: 2,
                      img: Company_img,
                      title: 'Krav på enskilda avlopp', 
                      clock: clock_img,
                      clocktitle: '2022-02-21',
                      home: home, 
                      hometitle: 'Västra götaland',
                      place: ep_place,
                      placetitle: 'Göteborg', 
                      law: law, 
                      lawtitle: 'Tingsrätt', 
                      text: 'Det är du som rår över din avloppsrening som ansvarar för att utsläppet inte orsakar olägenhet för varken människors hälsa eller miljön. Myndighetens krav ska anpassas utifrån de risker ditt avloppsutsläpp kan innebära. Varje ärende ska prövas var för sig.', 
                      pdf: Pdf,
                      pdftitle: '14mb', 
                      word: Word, 
                      wordtitle: '14 Sidor', 
                      buk: book, 
                      buktitle: 'Öppna', 
                      download: download, 
                      downloadtitle: 'Ladda Ner'
                  },
                  {
                      id: 3,
                      img: Company_img,
                      title: 'Krav på enskilda avlopp', 
                      clock: clock_img,
                      clocktitle: '2022-02-21',
                      home: home, 
                      hometitle: 'Västra götaland',
                      place: ep_place,
                      placetitle: 'Göteborg', 
                      law: law, 
                      lawtitle: 'Tingsrätt', 
                      text: 'Det är du som rår över din avloppsrening som ansvarar för att utsläppet inte orsakar olägenhet för varken människors hälsa eller miljön. Myndighetens krav ska anpassas utifrån de risker ditt avloppsutsläpp kan innebära. Varje ärende ska prövas var för sig.', 
                      pdf: Pdf,
                      pdftitle: '14mb', 
                      word: Word, 
                      wordtitle: '14 Sidor', 
                      buk: book, 
                      buktitle: 'Öppna', 
                      download: download, 
                      downloadtitle: 'Ladda Ner'
                  }
              ]
          
          }
    
    const [filter, setFilter] = useState('');
    
    const searchText = (event) => {
        setFilter(event.target.value);
    }

    let dataSearch = data.CardData.filter(item => {
        return Object.keys(item).some(key=> 
            item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
            )
        })



    return(
        <div className="Background">

            <hr/>

            <div className="search_avlop">

                <div className="search_box">
					<img src={search} alt="search" />
					<input id="Search" name="Search" className="search_box_input" type="search" placeholder="Search" value={filter} onChange={searchText.bind(this)} />
					<button className="search_box_button">SÖK</button>
				</div>

                <div className="search_drop">
					
					<select name="Välja län" className="search_drop_data">
						<option value="default">Välja län</option>
						<option>Muro</option>
						<option>Muro</option>
					</select>
					<select name="Välja kommun" className="search_drop_data">
						<option value="default">Välja kommun</option>
						<option>Muro</option>
						<option>Muro</option>
					</select>
					<select name="Beslutande organ" className="search_drop_data">
						<option value="default">Beslutande organ</option>
						<option>Muro</option>
						<option>Muro</option>
					</select>
					<select name="Välja län" className="search_drop_data">
						<option value="default">2019-2012</option>
						<option>Muro</option>
						<option>Muro</option>
					</select>
					
					{/* <input className="search_drop_data" type="date" placeholder="date" /> */}
					<div className="search_drop_des remove_start">Ta bort allt</div>
				</div>
                <div className="search_filter">
					<div className="search_filter_all">
						Antal träffar: <span>983</span>
					</div>
					<Dropdown className="remove_start">
						<Dropdown.Toggle className="start" id="dropdown-basic">
							<img src={Filterimg} alt="filter" />
							Den senaste
						</Dropdown.Toggle>

						<Dropdown.Menu>
							<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
							<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
							<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
				</div>

                
                <div className="search_card_mobile">
					<div className="fullinfo">
					
						<div className="natification">
								<div className=" set cardImg">
									<img src={Company_img} className='card_imggg' alt="cardImg" />
							</div>
							<div className="set">
								<img src={home} alt="clock" />
								<span className="end">Västra götaland</span>
							</div>
							<div className="set">
								<img src={ep_place} alt="clock" />
								<span className="end">Göteborg</span>
							</div>
							<div className="set">
								<img src={law} alt="clock" />
								<span className="end">Tingsrätt</span>
							</div>
						</div>
							<div className="cardInfo">
							<div className="cardTitle">Krav på enskilda avlopp for search</div>
						</div>
						<div className="describ">
							Det är du som rår över din avloppsrening som ansvarar för att utsläppet inte orsakar olägenhet för varken människors hälsa eller
							miljön. Myndighetens krav ska anpassas utifrån de risker ditt avloppsutsläpp kan innebära. Varje ärende ska prövas var för sig.
						</div>
						<div className="allPdf">
						
							<div className="pdfRight">
								<button className="book">
									Öppna
									<img src={book} alt="book" />
								</button>
								<button className="download">
									Ladda Ner
									<img src={download} alt="download" />
								</button>
							</div>
						</div>
					</div>
				</div>

                    {dataSearch.map((item, index) => {
                        return(
                            <div className="search_card">
					<div className="cardImg">
						<img src={item.img} alt="cardImg" />
					</div>
					<div className="fullInfo">
						<div className="cardInfo">
							<div className="cardTitle">{item.title}</div>
{/* 							<div className="saved">
								<p>Spara</p>
								<img className="save"  alt="save" />
							</div> */}
						</div>
						<div className="natification">
							<div className="set">
								<img src={item.clock} alt="clock" />
								<span className="end">{item.clocktitle}</span>
							</div>
							<div className="set">
								<img src={item.Home} alt="clock" />
								<span className="end">{item.hometitle}</span>
							</div>
							<div className="set">
								<img src={item.place} alt="clock" />
								<span className="end">{item.placetitle}</span>
							</div>
							<div className="set">
								<img src={item.Lawimg} alt="clock" />
								<span className="end">{item.lawtitle}</span>
							</div>
						</div>
						<div className="describ">{item.text}</div>
						<div className="allPdf">
							<div className="pdfLeft">
								<div className="get">
									<img src={item.pdf} alt="pdf" />
									{item.pdftitle}
								</div>
								<div className="get">
									<img src={item.word} alt="word" />
									{item.wordtitle}
								</div>
							</div>
							<div className="pdfRight">
								<button className="book">
									{item.buktitle}
									<img src={item.buk} alt="book" />
								</button>
								<button className="download">
									{item.downloadtitle}
									<img src={item.download} alt="download" />
								</button>
							</div>
						</div>
					</div>
				</div>
                        )
                    })}
                

                 
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
                        <i className="numbers">+50000
                        </i>
                        <p className="numb_txt">Protokoll i samma plats</p>
                    </ul>
                    <hr/>
                    <ul>
                        <i className="numbers">+30000
                        </i>
                        <p className="numb_txt">Ned laddade protokoll</p>
                    </ul>
                    <hr/>
                    <ul>
                        <i className="numbers">+10000

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

    <Footer/>
            	
        </div>
    )
}


export default Avlop;