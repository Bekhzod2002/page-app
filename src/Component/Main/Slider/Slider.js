import { Component } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../../index.css'
export default class SimpleSlider extends Component {
  render() {


    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
    };
    return (
      <div className="slider">
        <Slider {...settings}>

            
            
                <div className="slide1" >
                    <p>
                        Construction and Building Materials <br/> provides an 
                        international forum for <br/> the. Construction and 
                        Building <br/> Materials provides an international <br/> forum for the 
                    </p>
                    <button>Kils kommun</button>
                </div>
                <div className="slide2">
                    <p>
                        Construction and Building Materials <br/> provides an 
                        international forum for <br/> the. Construction and 
                        Building <br/> Materials provides an international <br/> forum for the 
                    </p>
                    <button>Arvika kommun</button>
                </div>
                <div className="slide3">
                    <p>
                        Construction and Building Materials <br/> provides an 
                        international forum for <br/> the. Construction and 
                        Building <br/> Materials provides an international <br/> forum for the 
                    </p>
                    <button>Karlstads kommun</button>
                </div>
                <div className="slide4">
                    <p>
                        Construction and Building Materials <br/> provides an 
                        international forum for <br/> the. Construction and 
                        Building <br/> Materials provides an international <br/> forum for the 
                    </p>
                    <button>Karlstads Arvika</button>
                </div>
            
          

        </Slider>
      </div>
    );
  }
}