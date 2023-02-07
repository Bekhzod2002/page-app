import '../../../index.css';
import { useState } from 'react';
const Footer = () => {

    const [selected, setSelected] = useState(null)

    const toggle = (i) => {
        if(selected == i) {
            return setSelected(null )
        }

        setSelected(i)
    }

    return(
        <div>
            <div className='wrapper'>

            
                <h5 className='fragor_head'>Frågor och svar</h5>
                <div className='accordion'>
                    {data.map((item, i ) =>  (
                        <div className='item'>
                            <div className='title' onClick={() => toggle(i)}>
                                <h3>{item.question}</h3>   
                                <span>{selected === i ? '-' : '+'}</span> 
                            </div> 
                            <div className={selected === i ? 'content show' : 'content'}>{item.answer}</div>

                        </div>
                    ))

                    }
                </div>   



            </div>
 
            <div className='black_part'>
                    <p>Copyright © 2022 Maxplatt.se Org 550964-4584 Onic webbyrå</p>
                    <div className='blacktxt'>
                        <p>Integritetspolicy</p>
                        <p>Allmänna villkor</p>
                    </div>
                </div>
        
        </div>
        

    )
}

const data = [
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

export default Footer