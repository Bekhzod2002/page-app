import React from "react";
import search from '../../Images/search.png';
import './Avlop.css'

const Avlop = () => {
    return(
        <div className="Background">

            <hr/>

            <div className="search_avlop">

                <div className="search_box">
					<img src={search} alt="search" />
					<input id="Search" name="Search" className="search_box_input" type="search" placeholder="Search" />
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

                
            </div>
            	
        </div>
    )
}

export default Avlop;